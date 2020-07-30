import React, { useState } from "react";
import StepDiv from "./StepDiv";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  border-radius: 20px;
`;

export default function StartScreen() {
  return (
    <PageContainer>
      <Header>
        <Logo>Family Recipe App</Logo>
        <ProgressHeader>Step 1: What’s the story? </ProgressHeader>
        {/* <ul>
          <p>Secret Family Recipe App</p>
          <p>Step 1: What’s the story? </p>
        </ul> */}
      </Header>
      <ProgressBarDiv>
        <ProgressSignifier></ProgressSignifier>
      </ProgressBarDiv>
      <h1>Create a recipe in 3 easy steps</h1>
      <div>
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
      </div>
      <br />
      <br />
      <div
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
      </div>
    </PageContainer>
  );
}
