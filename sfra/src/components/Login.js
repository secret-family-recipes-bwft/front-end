import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
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
  width: 100%
  height: 140px;
`;

const Logo = styled.h2`
  fontfamily: "airbnb_cereal_appbook";
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
  height: 630px;

  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;

const Heading = styled.h2`
  fontfamily: "airbnb_cereal_appbook";
  font-size: 24px;
  margin-bottom: 70px;
`;

const SecondHeading = styled.h2`
  fontfamily: "airbnb_cereal_appbook";
  font-size: 24px;
  margin-top: 70px;
`;

const AltLink = styled.h3`
  fontfamily: "airbnb_cereal_appbook";
  font-size: 14px;
  color: #317df6;
  text-decoration: none;
`;
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
        console.log(res.data);
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
            <Link to="/return-user-dash">
              <PrimaryButton action="Login" />
            </Link>
          </form>
          <SecondHeading>I'm new here</SecondHeading>
          <Link style={{ textDecoration: "none" }} to="/SignUp">
            <AltLink>Create new account</AltLink>
          </Link>
        </CardWrapper>
      </PageContainer>
    </div>
  );
}
