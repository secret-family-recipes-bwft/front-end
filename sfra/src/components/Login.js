import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

export default function Login() {
  const defaultState = {
    email: "",
    password: "",
  };
  const [formState, setFormState] = useState(defaultState);
  function handleChange(e) {
    formState({ ...defaultState, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    formState(defaultState);
  }

  return (
    <div>
      <h1>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={formState.email}
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
        <Link to="/return-user-dash">
          <button>Login</button>
        </Link>
      </form>
      <h1>Im new here</h1>
      <Link to="/SignUp">
        <p>Create new account</p>
      </Link>
    </div>
  );
}
