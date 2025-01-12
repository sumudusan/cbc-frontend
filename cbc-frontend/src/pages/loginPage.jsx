import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import toast from 'react-hot-toast'
export default function LoginPage() {

  const[email, setEmail]      =  useState("Your Email")
  const[password, setPassword]= useState("Your Password")

  function login(){
    axios.post("http://localhost:5000/api/users/login",{
      email :email,
      password :password
    }).then(
      (res)=>{
        console.log(res)
        //firstly we look if there is a user logged in.
        //if it has not logged in an user return 
        if(res.data.user==null){
          //use 'toast for display message'
          toast.error(res.data.message)//get the error from a message
          return
        }
        toast.success("Login success")
        //keep the token for upcoming events
        localStorage.setItem("token", res.data.token)
        //if user type is admin, navigate to '/admin'
        //else navigate to home page
        if(res.data.user.type=="admin"){
          window.location.href = "/admin"
        }else{
          window.location.href = "/"
        }
      }
    )
  }

  return (
   <div className="bg-red-500 h-screen w-full flex items-center justify-center">
    <div className="w-[450px] h-[450px] bg-blue-400 flex flex-col justify-center items-center">
      <img src="1.png"
      className="border rounded-full w-[100px]"
      />
      <span>Email</span><input defaultValue={email} onChange={(e)=>{
        setEmail(e.target.value)
      }}
      className="rounded-md"/>
      <span>Password</span> <input defaultValue={password} onChange={(e)=>{
        setPassword(e.target.value)
      }}
      className="rounded-md"/>
      <button onClick={login}
      className="bg-white rounded-lg">Login</button>
    </div>
   </div>
  );
}
