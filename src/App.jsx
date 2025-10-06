import { useState } from 'react'
import './App.css'
import app from './firebase.config'
import Register from './pages/Register'
import Login from './pages/Login'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayOutOne from './layouts/LayOutOne'
import { ToastContainer, toast } from 'react-toastify';

function App() {
 const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route path='/register'element={<Register/>}/>
  <Route path='/login'element={<Login/>}/>

  
  </Route>
 ))

  return (
    <>
  <ToastContainer />
  <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
