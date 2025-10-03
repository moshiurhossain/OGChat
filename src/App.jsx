import { useState } from 'react'
import './App.css'
import app from './firebase.config'
import Register from './pages/Register'
import Login from './pages/Login'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayOutOne from './layouts/LayOutOne'

function App() {
 const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route path='/register'element={<Register/>}/>

  
  </Route>
 ))

  return (
    <>
  <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
