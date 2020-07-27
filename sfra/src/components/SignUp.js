import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

export default function SignUp() {
  const defaultState = {
    name: "",
    email: "",
    password: "",
    terms: "",
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
      <h1>Nice to meet you</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
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
        <label htmlFor="terms">
          Terms and Conditions
          <input
            type="checkbox"
            name="terms"
            id="terms"
            value={formState.terms}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <br />
        <Link to="/new-user-dash">
          <button>Sign Up</button>
        </Link>
      </form>
      <h1>I have an account</h1>
      <Link to="/">
        <p>Login</p>
      </Link>
    </div>
  );
}
