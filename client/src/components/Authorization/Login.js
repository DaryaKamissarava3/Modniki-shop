import React, {useState} from 'react';
import Input from "../Input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/user";
import './login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="login-container">
      <div className="login">
        <div className="login-header">Login form</div>
        <Input value={email} setValue={setEmail} type="text" placeholder="Enter name..."/>
        <Input value={password} setValue={setPassword} type="password" placeholder="Enter password..."/>
        <button
          className="login-btn"
          onClick={() => dispatch(login(email, password))}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;