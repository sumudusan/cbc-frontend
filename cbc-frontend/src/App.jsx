import React from "react"
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserData from "./components/UserData"
import HomePage from "./pages/homePage"
import LoginPage from "./pages/loginPage"
import AdminHomePage from "./pages/AdminHomePage";

export default function App(){

  return(
    
    <BrowserRouter>
    <Routes path="/*">
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/HomePage" element={<HomePage/>} />
      <Route path="/admin/*" element={<AdminHomePage/>}/>
      <Route path="/UserData" element={<UserData/>} />
    </Routes>
    </BrowserRouter>
  )
}