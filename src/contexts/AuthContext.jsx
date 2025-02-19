import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

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
    if (user && token) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    }
  }, [user, token]);

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
