import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [values, setValues] = useState({
    credentials: { username: "", password: "" },
  });

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.credentials.username}
          onChange={onChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={values.credentials.password}
          onChange={onChange}
        />
      </form>
    </>
  );
};

export default Login;
