import { useContext, useState } from "react";
import { Context } from "../main"
import { Navigate, useNavigate } from "react-router-dom";

Context
function Login() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [confirmPassword,setConfirmPassword]=useState("");
const navigateTo=useNavigate();

const handlelogin=()=>{
  email.preventDefault();
}
if(isAuthenticated){
  return <Navigate to={"/"} />
}
  return (
    <div>
      
    </div>
  )
}

export default Login
