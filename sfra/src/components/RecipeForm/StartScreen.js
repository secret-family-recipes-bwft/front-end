import React, { useState } from "react";
import StepDiv from "./StepDiv";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PrimaryButton from "../Styles/PrimaryButton";
import SecondaryButton from "../Styles/SecondaryButton";
const PageContainer = styled.div`
  width: 100vw;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100px;
  // background: pink;
`;

const Logo = styled.h2`
  font-family: "airbnb_cereal_appbold";
  font-size: 18px;
  // margin-top: 40px;
  margin-left: 80px;
  color: black;
  // background: green;
`;

const ProgressHeader = styled.p`
  font-size: 16px;
  font-family: "airbnb_cereal_appbook";
  font-weight: normal;
  margin-left: 100px;
  // background: green;
`;
const ProgressBarDiv = styled.div`
  width: 100vw;
  // border: 4px solid #eeefed;
  background: #eeefed;
`;

const ProgressSignifier = styled.div`
  width: calc((100% / 9) * 1);
  border: 4px solid #317df6;
  border-radius: 0px 20px 20px 0px;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #fafafa;
  display: flex;
`;

// FieldsContainer
const FieldsContainer = styled.div`
  width: 60%;
  height: 90vh;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const FormNavigation = styled.div`
  width: 60%;
  height: 10vh;
  position: fixed;
  bottom: 0;
  // background-color: pink;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #cbd2d9;
`;

const ButtonDiv = styled.div`
  width: 600px;
  height: 60px;
  // background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled.button`
  width: 145px;
  height: 40px;

  background: white;
  border-radius: 5px;
  border: 1px solid #317df6;
  color: #317df6;

  font-size: 12px;
  font-family: "airbnb_cereal_appmedium";
  margin-right: 8px;
`;

const NextButton = styled.button`
  width: 145px;
  height: 40px;

  background: #317df6;
  border-radius: 5px;
  border: none;
  color: white;

  font-size: 12px;
  font-family: "airbnb_cereal_appmedium";
  margin-left: 8px;
`;

export default function StartScreen() {
  return (
    <PageContainer>
      <Header>
        <Logo>Family Recipe App</Logo>
        <ProgressHeader>Step 1: What’s the story? </ProgressHeader>
        {/*60% */}
      </Header>
      <ProgressBarDiv>
        <ProgressSignifier />
      </ProgressBarDiv>
      <FormContainer>
        <FieldsContainer>
          <FormNavigation>
            <ButtonDiv>
              <BackButton>Back</BackButton>
              <NextButton>Next</NextButton>
            </ButtonDiv>
          </FormNavigation>
        </FieldsContainer>
        {/* <ContentConatiner></ContentConatiner> */}
      </FormContainer>

      {/* <h1>Create a recipe in 3 easy steps</h1> */}
      {/* <div>
        <StepDiv
          step="STEP 1"
          title="What's the story"
          overview="Name, Category, Originator, Recipe Story"
        />
        <StepDiv
          step="STEP 2"
          title="What can you expect from this recipe? "
          overview="Prep Time, Allergies, Serving Size"
        />
        <StepDiv
          step="STEP 3"
          title="How do you make this recipe?"
          overview="Ingredients, Directions"
        />
      </div> */}
      {/* <br />
      <br /> */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          margin: "0 auto",
        }}
      >
        <Link>
          <button>Back</button>
        </Link>

        <br />
        <Link to="/the-story-basics">
          <button>Next</button>
        </Link>
      </div> */}
    </PageContainer>
  );
}
