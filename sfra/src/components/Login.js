<<<<<<< HEAD
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {axiosWithAuth} from '../utils/AxiosWithAuth';

import TextInputStyle from "./Styles/TextInputStyle";
import PrimaryButton from "./Styles/PrimaryButton";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
=======
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import TextInputStyle from "./Styles/TextInputStyle";
import PrimaryButton from "./Styles/PrimaryButton";
import styled from "styled-components";
import welcome from "./welcome.svg";
import * as yup from "yup";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  width: 100%
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
  height: 140px;
`;

const Logo = styled.h2`
  font-family: "airbnb_cereal_appbold";
  font-size: 18px;
  margin-top: 40px;
  margin-bottom: 70px;
  margin-left: 80px;
`;

const CardWrapper = styled.div`
  display: flex;
<<<<<<< HEAD
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 630px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;

const Heading = styled.h2`
  font-family: "airbnb_cereal_appbook";
  font-size: 24px;
  margin-bottom: 70px;
`;

const SecondHeading = styled.h2`
  font-family: "airbnb_cereal_appbook";
=======
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 500px;

  border: 1px solid #bdbdbd;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  font-family: "airbnb_cereal_appmedium";
  font-weight: normal;
  font-size: 24px;
  margin-bottom: 50px;
`;

const SecondHeading = styled.h2`
  font-family: "airbnb_cereal_appmedium";
  font-weight: normal;
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
  font-size: 24px;
  margin-top: 70px;
`;

const AltLink = styled.h3`
<<<<<<< HEAD
  font-family: "airbnb_cereal_appbook";
=======
  fontfamily: "airbnb_cereal_appbook";
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
  font-size: 14px;
  color: #317df6;
  text-decoration: none;
`;
<<<<<<< HEAD
=======

const FormWrapper = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: start;
  // background: pink;
`;

const Button = styled.button`
  width: 145px;
  height: 40px;

  background: #317df6;
  border-radius: 5px;
  border: none;
  color: white;

  font-size: 12px;
  font-family: "airbnb_cereal_appmedium";
  font-weight: normal;
  margin-bottom: 10px;
`;

const SubDirection = styled.div`
  margin-bottom: 40px;
`;

const GapDiv = styled.div`
  height: 200px;
  border: 1px solid black;
  margin-left: 40px;
  margin-right: 40px;
  border-radius: 12px;
`;

const Illustartion = styled.img`
  width: 300px;
`;
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3

export default function Login() {
  const defaultState = {
    username: "",
    password: "",
  };

  const [formState, setFormState] = useState(defaultState);
<<<<<<< HEAD
  const history = useHistory();
=======
  const [errors, setErrors] = useState({
    ...defaultState,
  });
  // const [user, setUser] = useState({});
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3

  const postUser = (input) => {
    console.log(input)
    axiosWithAuth()
      .post(
        "https://bw-secret-family-recipes-1.herokuapp.com/api/auth/login",
        input
      )
      .then((res) => {
<<<<<<< HEAD
        console.log(res.data);
        localStorage.setItem("user ID", res.data.user.id)
        // console.log(localStorage.getItem("user ID"))
        // console.log(res.data.user.id)
        window.localStorage.setItem('token', res.data.token)
        if(window.localStorage.getItem('token'))
        {history.push('/return-user-dash')}
=======
        console.log("Success logged in", res.data);
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
      })
      .catch((err) => {
        console.log("Faild logged in", err);
      });
  };

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .min(4, "Please provide your username")
      .required("Please provide a name for your recipe"),
    password: yup
      .string()
      .min(8, "Passwords must be at least 4 characters long")
      .required("Password are required"),
  });

  function validateChange(e) {
    e.persist();

    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((error) => {
        setErrors({ ...errors, [e.target.name]: error.errors[0] });
      });
  }

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    validateChange(e);
  }
  function handleSubmit(e) {
    e.preventDefault();
    postUser(formState);
    setFormState(defaultState);
  }

  return (
    <div>
<<<<<<< HEAD
    <Header>
      <Logo>Family Recipe App</Logo>
    </Header>
    <PageContainer>
      <CardWrapper>
        <Heading>Welcome Back</Heading>
        <form onSubmit={handleSubmit}>
          <TextInputStyle
            label="Username"
            type="username"
            name="username"
            value={formState.username}
            onChange={handleChange}
          />
          <TextInputStyle
            label="Password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
          <br />
          {/* <Link to="/return-user-dash"> */}
            <PrimaryButton action="Login" />
          {/* </Link> */}
        </form>
        <SecondHeading>I'm new here</SecondHeading>
        <Link style={{ textDecoration: "none" }} to="/SignUp">
          <AltLink>Create new account</AltLink>
        </Link>
      </CardWrapper>
    </PageContainer>
  </div>
=======
      <Header>
        <Logo>Family Recipe App</Logo>
      </Header>
      <PageContainer>
        <CardWrapper>
          <FormWrapper>
            <Heading>Welcome Back</Heading>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextInputStyle
                label="Username"
                type="username"
                name="username"
                value={formState.username}
                onChange={handleChange}
                errors={errors}
              />
              <TextInputStyle
                label="Password"
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                errors={errors}
              />
              <Link
                style={{
                  margin: "0px",
                  // background: "pink",
                  display: "flex",
                  textDecoration: "none",
                }}
                to="/return-user-dash"
              >
                <Button>Login</Button>
              </Link>
            </form>
          </FormWrapper>
          <GapDiv />
          <Illustartion src={welcome} />
        </CardWrapper>
        <SubDirection>
          <SecondHeading>I'm new here</SecondHeading>
          <Link style={{ textDecoration: "none" }} to="/SignUp">
            <AltLink>Create new account</AltLink>
          </Link>
        </SubDirection>
      </PageContainer>
    </div>
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
  );
}
