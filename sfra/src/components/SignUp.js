import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import axios from "axios";

export default function SignUp() {
  const defaultState = {
    username: "",
    email: "",
    password: "",
    // terms: false,
  };

  const [formState, setFormState] = useState(defaultState);
  const [user, setUser] = useState({});

  const postUser = (input) => {
    axios
      .post(
        "https://bw-secret-family-recipes-1.herokuapp.com/api/auth/register",
        input
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormState({ ...formState, [e.target.name]: value });
    // const onCheckBoxChange = (evt) => {
    //   const checked = evt.target.checked;
    //   console.log(checked);
    //   setFormValues({
    //     ...formValues,
    //     termsOfService: checked,
    //   });
    // };
  }
  function handleSubmit(e) {
    e.preventDefault();
    postUser(formState);
    setFormState(defaultState);
  }

  return (
    <div>
      <h1 style={{ fontFamily: "airbnb_cereal_appmedium" }}>
        Nice to meet you
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          type="username"
          name="username"
          value={formState.username}
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
        {/* <label htmlFor="terms">
          Terms and Conditions
          <input
            type="checkbox"
            name="terms"
            id="terms"
            value={formState.terms}
            onChange={handleChange}
          />
        </label> */}
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
