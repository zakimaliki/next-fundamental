import React from 'react'
import { useRouter } from "next/router";

const Login = () => {
  const Router = useRouter();

  const setToken =()=>{
    localStorage.setItem("Token","aaaa")
    Router.replace("/dashboard");
  }
  return (
    <div>
      <button onClick={setToken}>set token</button>
    </div>
  )
}

export default Login