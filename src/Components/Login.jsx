import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const {Component} = props;
  const [data, updatedData] = useState({ name: "", pass: "" });
  const navigate = useNavigate();
  const [isSucessful, updatedState] = useState(false);

  

  const updatingValues = (event) => {
    updatedData({ ...data, [event.target.name]: event.target.value });
  };
  const checkIsLoginSuccess = () => {
    if (data.name === "aman" && data.pass === "0420") {
        updatedState(true);
      alert("Login Succesfull");
      navigate("/about/email");
    } else {
        updatedState(false);
      alert("Login Failed");
    }
  };

  return (
    <div>
        {!isSucessful ?
        <center>
          <div className="login-box">
            <input
              className="login-input"
              type="name"
              name="name"
              value={data.name}
              placeholder="Please Enter Name"
              onChange={updatingValues}
            ></input>
            <input
              className="login-input"
              type="password"
              name="pass"
              value={data.pass}
              placeholder="Please Enter Password"
              onChange={updatingValues}
            ></input>
            <button
              className="login-btn"
              color="primary"
              onClick={checkIsLoginSuccess}
            >
              Login
            </button>
          </div>
        </center>
        :<Component></Component>}
     
    </div>
  );
};

export default Login;
