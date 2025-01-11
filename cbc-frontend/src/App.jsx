import React from "react"
import UserData from "./components/UserData"
import HomePage from "./pages/homePage"
import LoginPage from "./pages/loginPage"
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){

  return(
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/HomePage" element={<HomePage/>} />
      <Route path="/UserData" element={<UserData/>} />
    </Routes>
    </BrowserRouter>
  )
}