import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import TextInputStyle from "./Styles/TextInputStyle";
import PrimaryButton from "./Styles/PrimaryButton";
import styled from "styled-components";
import welcome from "./welcome.svg";

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
  font-size: 24px;
  margin-bottom: 70px;
`;

const SecondHeading = styled.h2`
  font-family: "airbnb_cereal_appmedium";
  font-weight: normal;
  font-size: 24px;
  margin-top: 70px;
`;

const AltLink = styled.h3`
  fontfamily: "airbnb_cereal_appbook";
  font-size: 14px;
  color: #317df6;
  text-decoration: none;
`;

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
              <Link
                style={{
                  margin: "0px",
                  // background: "pink",
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
  );
}
