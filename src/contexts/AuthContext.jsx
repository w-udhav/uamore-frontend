import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const navigate = useNavigate();

  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    const existingUser = localStorage.getItem("user");
    const existingToken = localStorage.getItem("token");
    if (existingUser) {
      setUser(JSON.parse(existingUser));
    }
    if (existingToken) {
      setToken(existingToken);
    }
    if (existingUser && existingToken) {
      setIsLoggedIn(true);
    } else {
      logout();
      setIsLoggedIn(false);
    }
    if (isLoggedIn) {
      getDetails();
    }

    // Intercept axios requests to handle token expiration
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          // Token expired, log the user out
          toast.error("Session expired. Please log in again.");
          logout();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, []);

  const getDetails = async () => {
    if (isLoggedIn) {
      try {
        const res = await axiosInstance.get("/api/v1/profile");
        setUser(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addAddress = async (address) => {
    const {
      receiverName,
      addressLine1,
      addressLine2,
      city,
      state,
      addressType,
      pincode,
      country,
    } = address;
    if (isLoggedIn) {
      try {
        let requestBody = {
          addresses: [
            {
              receiverName,
              addressLine1,
              addressLine2,
              city,
              state,
              addressType,
              pincode,
              country,
            },
          ],
        };
        const res = await axiosInstance.patch(
          "/api/v1/profile/update",
          requestBody
        );
        await getDetails();

        return res;
      } catch (error) {}
    }
  };

  const login = (userData) => {
    setUser(userData);
    setToken(userData?.token);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userData?.token);
    navigate("/account/user");
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoggedIn,
        login,
        logout,
        setUser,
        getDetails,
        addAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
