import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function ProfileTab() {
  const { user, addAddress } = useAuth();

  const [userDetails, setUserDetails] = useState({
    receiverName: user?.addresses[0]?.receiverName ?? "",
    addressLine1: user?.addresses[0]?.addressLine1 ?? "",
    addressLine2: user?.addresses[0]?.addressLine2 ?? "",
    city: user?.addresses[0]?.city ?? "",
    state: user?.addresses[0]?.state ?? "",
    addressType: user?.addresses[0]?.addressType ?? "",
    pincode: user?.addresses[0]?.pincode ?? "",
    country: user?.addresses[0]?.country ?? "",
  });

  const handleAddress = async () => {
    const address = {
      receiverName: userDetails.receiverName,
      addressLine1: userDetails.addressLine1,
      addressLine2: userDetails.addressLine2,
      city: userDetails.city,
      state: userDetails.state,
      addressType: userDetails.addressType,
      pincode: userDetails.pincode,
      country: userDetails.country,
    };

    try {
      const res = await addAddress(address);
      if (res.status === 200) {
        console.log("success");
      }
      flag = false;
    } catch (error) {}
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 pb-20">
        <p className="md:text-2xl font-playfair-display text-charcoalBlack/80 border-b pb-2">
          Basic
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-sm">Name</p>
            <input
              type="text"
              placeholder="Full Name"
              value={user.name}
              className="w-full border-2 px-3 py-2 h-11"
              disabled
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Email</p>
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              className="w-full border-2 px-3 py-2 h-11"
              disabled
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Phone number</p>
            <input
              type="number"
              placeholder="Phone Number"
              value={user.phone}
              className="w-full border-2 px-3 py-2 h-11"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 border-b pb-8">
        <div className="flex justify-between items-center border-b pb-2">
          <p className="md:text-2xl font-playfair-display text-charcoalBlack/80 ">
            Your Addresses
          </p>
          <button
            onClick={handleAddress}
            className="bg-zinc-100 px-6 py-2 text-sm hover:bg-charcoalBlack hover:text-white transition-all"
          >
            Update
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-sm">Receiver Name</p>
            <input
              type="text"
              placeholder="Receiver Name"
              value={userDetails.receiverName}
              onChange={(e) =>
                setUserDetails({ ...userDetails, receiverName: e.target.value })
              }
              className="w-full border-2 px-3 py-2 h-11"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm">Address Line 1</p>
            <input
              type="text"
              placeholder="Address Line 1"
              value={userDetails.addressLine1}
              onChange={(e) =>
                setUserDetails({ ...userDetails, addressLine1: e.target.value })
              }
              className="w-full border-2 px-3 py-2 h-11"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm">Address Line 2</p>
            <input
              type="text"
              placeholder="Address Line 2"
              value={userDetails.addressLine2}
              onChange={(e) =>
                setUserDetails({ ...userDetails, addressLine2: e.target.value })
              }
              className="w-full border-2 px-3 py-2 h-11"
            />
          </div>

          {/* City */}
          <div className="flex flex-col gap-2">
            <p className="text-sm">City</p>
            <input
              type="text"
              placeholder="City"
              value={userDetails.city}
              onChange={(e) =>
                setUserDetails({ ...userDetails, city: e.target.value })
              }
              className="w-full border-2 px-3 py-2 h-11"
            />
          </div>

          {/* State */}
          <div className="flex flex-col gap-2">
            <p className="text-sm">State</p>
            <input
              type="text"
              placeholder="State"
              value={userDetails.state}
              onChange={(e) =>
                setUserDetails({ ...userDetails, state: e.target.value })
              }
              className="w-full border-2 px-3 py-2 h-11"
            />
          </div>

          {/* Pincode */}
          <div className="flex flex-col gap-2">
            <p className="text-sm">Pincode</p>
            <input
              type="number"
              placeholder="Pincode"
              value={userDetails.pincode}
              onChange={(e) =>
                setUserDetails({ ...userDetails, pincode: e.target.value })
              }
              className="w-full border-2 px-3 py-2 h-11"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col gap-2">
            <p className="text-sm">Country</p>
            <input
              type="text"
              placeholder="Country"
              value={userDetails.country}
              onChange={(e) =>
                setUserDetails({ ...userDetails, country: e.target.value })
              }
              className="w-full border-2 px-3 py-2 h-11"
            />
          </div>

          {/* Address Type */}
          <div className="flex flex-col gap-2">
            <p className="text-sm">Address Type</p>
            <select
              value={userDetails.addressType}
              onChange={(e) => {
                setUserDetails({ ...userDetails, addressType: e.target.value });
              }}
              className="w-full border-2 px-3 py-2 h-11"
            >
              <option value="">Address Type</option>
              <option value="HOME">Home</option>
              <option value="WORK">Work</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
