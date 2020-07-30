import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import placeholderSuccess from "./placeholderSuccess.svg";

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
  font-family: "airbnb_cereal_appmedium";
  font-weight: normal;
  margin-left: 100px;
  color: #317df6;
  // background: green;
`;
const ProgressBarDiv = styled.div`
  width: 100vw;
  // border: 4px solid #eeefed;
  background: #eeefed;
`;

const ProgressSignifier = styled.div`
  width: calc((100% / 9) * 9);
  border: 4px solid #317df6;
  border-radius: 0px 20px 20px 0px;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
`;
// SuccessDiv
const SuccessDiv = styled.div`
  width: 50%;
  height: 90vh;
  // background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SuccessIMG = styled.img`
  width: 400px;
  margin-top: 40px;
`;

const SuccessHeading = styled.h1`
  font-size: 24px;
  font-family: "airbnb_cereal_appmedium";
  color: black;
`;

const SuccessSubHeading = styled.p`
  font-size: 18px;
  font-family: "airbnb_cereal_appbook";
  color: black;
  margin-bottom: 40px;
`;
const SuccessButton = styled.button`
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
const MaybeLater = styled.p`
  font-size: 12px;
  font-family: "airbnb_cereal_appmedium";
  color: #317df6;
`;

export default function SuccessPage() {
  return (
    <PageContainer>
      <Header>
        <Logo>Family Recipe App</Logo>
        <ProgressHeader>Success, your recipe was created! </ProgressHeader>
      </Header>
      <ProgressBarDiv>
        <ProgressSignifier />
      </ProgressBarDiv>
      <FormContainer>
        <SuccessDiv>
          <SuccessIMG src={placeholderSuccess} />
          <SuccessHeading>All done!</SuccessHeading>
          <SuccessSubHeading>You created your recipe!</SuccessSubHeading>
          <SuccessButton>View Recipe</SuccessButton>
          <MaybeLater>Maybe Later</MaybeLater>
        </SuccessDiv>
      </FormContainer>
    </PageContainer>

    // <div>
    //   <div>SUCCESS IMAGE</div>
    //   <h1>Success!</h1>
    //   <h4>Your recipe has been created!</h4>
    //   <br />
    //   <Link to="/recipe/:id">
    //     <button>View Recipe</button>
    //   </Link>
    //   <br />
    //   <Link to="/dash">
    //     <p>Maybe Later</p>
    //   </Link>
    // </div>
  );
}
