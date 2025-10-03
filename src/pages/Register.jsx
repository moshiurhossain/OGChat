// Register.jsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {

// --------------------Hide and show password
const [showpass,setShowpass]=useState(false)




  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <div className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <div className="flex justify-between items-center w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">

            <input
              type={showpass?"text":"password"}
              placeholder="Confirm password"
              className="w-[60%] outline-none"
              />
              <button className="cursor-pointer"
              onClick={()=>setShowpass(!showpass)}
              >
               {
                showpass ? <FaEyeSlash />
                         : <FaEye/>
               }
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Register
          </button>

          {/* Already have account */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
