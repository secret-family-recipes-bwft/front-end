import React, { useState } from "react";
<<<<<<< HEAD
import { Link, useHistory } from "react-router-dom";
import {axiosWithAuth} from "../utils/AxiosWithAuth";
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
import { Link } from "react-router-dom";
// import Input from "./Input";
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
  height: 800px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;

const Heading = styled.h2`
  font-family: "airbnb_cereal_appbook";
=======
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  // background: pink;
  width: 900px;
  height: 600px;

  border: 1px solid #bdbdbd;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  font-family: "airbnb_cereal_appmedium";
  font-weight: normal;
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
  font-size: 24px;
  margin-bottom: 70px;
`;

const SecondHeading = styled.h2`
<<<<<<< HEAD
  font-family: "airbnb_cereal_appbook";
=======
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
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: start;
  // background: red;
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

export default function SignUp() {
  const defaultState = {
    username: "",
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState(defaultState);
<<<<<<< HEAD
  const history = useHistory()
=======
  const [errors, setErrors] = useState({
    ...defaultState,
  });
  // const [user, setUser] = useState({});
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3

  const postUser = (input) => {
    axiosWithAuth()
      .post(
        "https://bw-secret-family-recipes-1.herokuapp.com/api/auth/register",
        input
      )
      .then((res) => {
<<<<<<< HEAD
        console.log(res);
        window.localStorage.setItem('token', res.data.token)
        history.push('/new-user-dash')
=======
        console.log(res.data);
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .min(4, "Please provide your username")
      .required("Please provide a name for your recipe"),
    email: yup
      .string()
      .required("Please provide an email")
      .email("Please provide a valid email"),
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
<<<<<<< HEAD
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormState({ ...formState, [e.target.name]: value });
=======
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    validateChange(e);
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
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
        <Heading>Nice to meet you</Heading>
        <form onSubmit={handleSubmit}>
          <TextInputStyle
            label="Username"
            type="username"
            name="username"
            value={formState.username}
            onChange={handleChange}
          />
          <TextInputStyle
            label="Email"
            type="email"
            name="email"
            value={formState.email}
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
          <br />
          <br />
          {/* <Link to="/new-user-dash"> */}
            <PrimaryButton action="Sign Up" />
          {/* </Link> */}
        </form>
        <SecondHeading>I have an account</SecondHeading>
        <Link style={{ textDecoration: "none" }} to="/">
          <AltLink>Login</AltLink>
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
            <Heading>Nice to meet you!</Heading>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column" }}
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
                label="Email"
                type="email"
                name="email"
                value={formState.email}
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
                  display: "flex",
                  textDecoration: "none",
                }}
                to="/new-user-dash"
              >
                <Button>Sign Up</Button>
              </Link>
            </form>
          </FormWrapper>
          <GapDiv />
          <Illustartion src={welcome} />
        </CardWrapper>
        <SubDirection>
          <SecondHeading>I have an account</SecondHeading>
          <Link style={{ textDecoration: "none" }} to="/">
            <AltLink>Login</AltLink>
          </Link>
        </SubDirection>
      </PageContainer>
    </div>
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
  );
}
