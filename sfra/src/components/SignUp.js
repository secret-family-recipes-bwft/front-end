import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {axiosWithAuth} from "../utils/AxiosWithAuth";
import TextInputStyle from "./Styles/TextInputStyle";
import PrimaryButton from "./Styles/PrimaryButton";
import styled from "styled-components";
import * as yup from 'yup';

const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
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
  font-size: 24px;
  margin-bottom: 70px;
`;

const SecondHeading = styled.h2`
  font-family: "airbnb_cereal_appbook";
  font-size: 24px;
  margin-top: 70px;
`;

const AltLink = styled.h3`
  font-family: "airbnb_cereal_appbook";
  font-size: 14px;
  color: #317df6;
  text-decoration: none;
`;

export default function SignUp() {
  const defaultState = {
    username: "",
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState('');
  const history = useHistory()

  const postUser = (input) => {
    axiosWithAuth()
      .post(
        "https://bw-secret-family-recipes-1.herokuapp.com/api/auth/register",
        input
      )
      .then((res) => {
        console.log(res);
        window.localStorage.setItem('token', res.data.token)
        history.push('/new-user-dash')
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
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    postUser(formState);
    setFormState(defaultState);
  }

  return (
<h1>Sign-up</h1>
  );
}


// <div>
// <Header>
//   <Logo>Family Recipe App</Logo>
// </Header>
// <PageContainer>
//   <CardWrapper>
//     <Heading>Nice to meet you</Heading>
//     <form onSubmit={handleSubmit}>
//       <TextInputStyle
//         label="Username"
//         type="username"
//         name="username"
//         value={formState.username}
//         onChange={handleChange}
//       />
//       <TextInputStyle
//         label="Email"
//         type="email"
//         name="email"
//         value={formState.email}
//         onChange={handleChange}
//       />
//       <TextInputStyle
//         label="Password"
//         type="password"
//         name="password"
//         value={formState.password}
//         onChange={handleChange}
//       />
//       <br />
//       <br />
//       <br />
//       {/* <Link to="/new-user-dash"> */}
//         <PrimaryButton action="Sign Up" />
//       {/* </Link> */}
//     </form>
//     <SecondHeading>I have an account</SecondHeading>
//     <Link style={{ textDecoration: "none" }} to="/">
//       <AltLink>Login</AltLink>
//     </Link>
//   </CardWrapper>
// </PageContainer>
// </div>