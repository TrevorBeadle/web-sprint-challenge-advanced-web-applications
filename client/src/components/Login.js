import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [values, setValues] = useState({
    credentials: { username: "", password: "" },
  });
  const history = useHistory();

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", values.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        history.push("/colors");
      })
      .catch(err => console.log(err));
  };

  const onChange = e => {
    setValues({
      credentials: {
        ...values.credentials,
        [e.target.name]: e.target.value,
      },
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
          type="password"
          id="password"
          name="password"
          value={values.credentials.password}
          onChange={onChange}
        />

        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
