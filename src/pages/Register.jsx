// Register.jsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { MdError } from "react-icons/md";
// import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Slide, toast } from "react-toastify";

export default function Register() {

// --------------------Hide and show password
const [showpass,setShowpass]=useState(false)


// --------------------set username
const [userName,setUserName]=useState('')
// --------------------set usernameError!!
const [usernameError,setUserNameError]=useState('')


// --------------------set email
const [email,setEmail]=useState('')
// -------------------set emailError
const [emailError,setEmailError]=useState('')


// --------------------set password
const [password,setPassword]=useState('')
// -------------------set passworError
const [passwordError,setPasswordError]=useState('')


// -------------------set confirmPassword
const [confirmPassword,setConfirmPassword]=useState('')
// -------------------set ConfirmPassworError
const [confirmPasswordError,setConfirmPasswordError]=useState('')


// ------------getAuth from firebase
const auth = getAuth();



// -------------------handleSubmit()
const handleSubmit =()=>{
  // ------------------------------Check for Validation-----------------------------------------
    // check for username
    if(!userName) return setUserNameError(`username is required `)
  
    // check for email
    if(!email) return setEmailError('email is required')
 
    if(!password) return setPasswordError('password is required')
    
    if(!confirmPassword) return setConfirmPasswordError(`you must confirm password`)
      if(password != confirmPassword) return setConfirmPasswordError(`password doesn't match`)
      //-----------------------------Get firebase auth--------------------------------- 
    
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(userCredential)
    // ...tostify msg
toast.success('🦄 Registered successfully', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Slide,
});
    // ------xxxxxx--------
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
    console.log(errorCode)
    // .............  tostify message
    // if(errorCode ==='auth/email-already-in-use'){
                toast.error(`${errorCode}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            });
}
    // ------xxxxxx--------
  // }
  );
     

// when validation is complete

}


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <div className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
            onChange={(e)=>{setUserName(e.target.value), setUserNameError('')}}
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="mt-2 text-red-500 flex items-center gap-2 text-[12px] ml-1">{usernameError}</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
            onChange={(e)=>{setEmail(e.target.value), setEmailError('')}}
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
                  <p className="mt-2 text-red-500 flex items-center gap-2 text-[12px] ml-1">{emailError}</p>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              onChange={(e)=>{setPassword(e.target.value), setPasswordError('')}}
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
                  <p className="mt-2 text-red-500 flex items-center gap-2 text-[12px] ml-1">{passwordError}</p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <div className="flex justify-between items-center w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">

            <input
            onChange={(e)=>{setConfirmPassword(e.target.value), setConfirmPasswordError('')}}
              type={showpass?"text":"password"}
              placeholder="Confirm password"
              className="w-[60%] outline-none"
              />
              {/* toggle button  */}
              <button className="cursor-pointer"
              onClick={()=>setShowpass(!showpass)}
              
              >
               {
                 showpass ? <FaEyeSlash />
                 : <FaEye/>
                }
              </button>
            </div>
                <p className="mt-2 text-red-500 flex items-center gap-2 text-[12px] ml-1">{confirmPasswordError}</p>
          </div>

          {/* Register Button */}
          <button
            onClick={handleSubmit}
            className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
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
