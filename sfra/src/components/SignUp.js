import React, { useState } from "react";
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
    <div>
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
          <Link to="/new-user-dash">
            <PrimaryButton action="Sign Up" />
          </Link>
        </form>
        <SecondHeading>I have an account</SecondHeading>
        <Link style={{ textDecoration: "none" }} to="/">
          <AltLink>Login</AltLink>
        </Link>
      </CardWrapper>
    </PageContainer>
  </div>
  );
}
