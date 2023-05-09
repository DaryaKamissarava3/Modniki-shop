import React, {useState} from 'react';
import Input from "../Input/Input";
import {registration} from "../../redux/actions/user";
import './registration.css';

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration-container">
      <div className="registration">
        <div className="registration-header">Registration form</div>
        <Input value={email} setValue={setEmail} type="text" placeholder="Enter email..."/>
        <Input value={password} setValue={setPassword} type="password" placeholder="Enter password..."/>
        <button
          className="registration-btn"
          onClick={() => registration(email, password)}
        >
          Registration
        </button>
      </div>
    </div>
  );
};

export default Registration;