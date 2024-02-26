import React, { useState } from 'react'
import Auth from '../Components/Auth'
import { useNavigate } from 'react-router-dom'
import { account } from '../Helper/appwrite'

const LoginBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className='btn btn-info text-xl font-bold mt-5 text-white'>Login</button>
  )
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();

  const loginAccount = async () => {
    const promise = account.createEmailSession(email, password);

    promise.then((response) => {
      nevigate("/");
    })
      .catch((err) => {
        alert(err);
      })
  }

  return (
    <Auth
      title={"Login"}
      discription={"Continue your journey after login..."}
      button={<LoginBtn onClick={loginAccount} />}
      instruction={"Don't have account?"}
      instructionLink={"/signup"}
      instructionName={" Signup"}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  )
}

export default Login
