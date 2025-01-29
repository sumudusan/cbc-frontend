import React from "react"
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast'
import UserData from "./components/UserData"
import HomePage from "./pages/home/homePage"
import LoginPage from "./pages/loginPage"
import AdminHomePage from "./pages/AdminHomePage";
import AddProductForm from "./pages/admin/addProductForm"

export default function App(){

  return(
    
    <BrowserRouter>
    <Toaster/>
    <Routes path="/*">
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/*" element={<HomePage/>} />
      <Route path="/admin/*" element={<AdminHomePage/>}/>
      <Route path="/products/addProduct" element={<AddProductForm/>}/>
      <Route path="/UserData" element={<UserData/>} />
    </Routes>
    </BrowserRouter>
  )
}