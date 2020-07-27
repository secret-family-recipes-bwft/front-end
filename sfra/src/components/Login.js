import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import axios from "axios";

export default function Login() {
  const defaultState = {
    username: "",
    password: "",
  };

  // api/auth/register

  // useEffect(() => {
  //   axios.post(
  //     "https://bw-secret-family-recipes-1.herokuapp.com/api/auth/login", formState
  //   ).then()
  // }, []);

  // const postUser = aUser => {
  //   axios.post(
  //     "https://bw-secret-family-recipes-1.herokuapp.com/api/auth/login", aUser
  //   ).then(res => {
  //     setUser
  //   })
  // }

  const [formState, setFormState] = useState(defaultState);
  const [user, setUser] = useState({});

  const postUser = (input) => {
    axios
      .post(
        "https://bw-secret-family-recipes-1.herokuapp.com/api/auth/login",
        input
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    postUser(formState);
    setFormState(defaultState);
  }

  return (
    <div>
      <h1>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          type="username"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
        <br />
        {/* <Link to="/return-user-dash"> */}
        <button>Login</button>
        {/* </Link> */}
      </form>
      <h1>Im new here</h1>
      <Link to="/SignUp">
        <p>Create new account</p>
      </Link>
    </div>
  );
}
