// Login.jsx
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, toast } from "react-toastify";


const auth = getAuth();

export default function Login() {
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')

  const [emailError,setEmailError] = useState('')
  const [passwordError,setPasswordError] = useState('')

  const handleLogin = ()=>{

  if(!email) return setEmailError('must enter your email')
  if(!password) return setPasswordError('must enter your password')


    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ... tostify msg
    toast.success('logged-in successfully', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    // -------xxxxxx------
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    // ------tostify
toast.error(`${errorCode}`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    //------xxxxxx------
  });
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <div className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <div className="flex items-center border rounded-lg px-3">
              <MdEmail className="text-gray-500 text-xl mr-2" />
              <input
                onChange={(e)=>{setEmail(e.target.value), setEmailError('')}}
                type="email"
                placeholder="Enter email"
                className="w-full py-2 focus:outline-none"
              />
            </div>
           <p className="mt-2 text-red-500 flex items-center gap-2 text-[12px] ml-1">{emailError}</p>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <div className="flex items-center border rounded-lg px-3">
              <RiLockPasswordFill className="text-gray-500 text-xl mr-2" />
              <input
                onChange={(e)=>{setPassword(e.target.value),setPasswordError('')}}
                type="password"
                placeholder="Enter password"
                className="w-full py-2 focus:outline-none"
              />
            </div>
            <p className="mt-2 text-red-500 flex items-center gap-2 text-[12px] ml-1">{passwordError}</p>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Login
          </button>

          {/* Don't have account */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
