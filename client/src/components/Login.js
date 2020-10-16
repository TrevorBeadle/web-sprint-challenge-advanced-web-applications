import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
