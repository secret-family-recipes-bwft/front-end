import React from "react";
import StepDiv from "./StepDiv";
import { Link } from "react-router-dom";
import styled from "styled-components";
import check from "./check.svg";

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
  width: calc((100% / 9) * 6);
  border: 4px solid #317df6;
  border-radius: 0px 20px 20px 0px;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #fafafa;
  display: flex;
`;

const FieldsContainer = styled.div`
  width: 60%;
  height: 90vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
// StatusLayoutDiv
const StatusLayoutDiv = styled.div`
  width: 80%;
  height: 90vh;
  // background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StatusContainer = styled.div`
  height: 350px;
  width: 360px;
  background: white;
  margin-top: 40px;
`;

const Heading = styled.h1`
  font-size: 20px;
  font-family: "airbnb_cereal_appmedium";
  font-weight: normal;
  text-align: left;
  margin-bottom: 30px;
`;

const StepBox = styled.div`
  width: 100%;
  height: 72px;
  // background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const StepNum = styled.h4`
  font-size: 10px;
  font-family: "airbnb_cereal_appmedium";
  // font-weight: normal;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const Title = styled.h4`
  font-size: 16px;
  font-family: "airbnb_cereal_appmedium";
  font-style: normal;
  font-weight: normal;
  margin-bottom: 4px;
  margin-top: 4px;
`;

const Overview = styled.h4`
  font-size: 12px;
  font-family: "airbnb_cereal_appbook";
  font-weight: normal;
  margin-bottom: 15px;
  margin-top: 0px;
`;

const StepDivider = styled.div`
  width: 100%;
  border: 1px solid #cbd2d9;
`;

// Completed Step

const CompletedDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background: pink;
`;
const Check = styled.img`
  width: 20px;
  height: 20px;
`;

// Completed Step

// Next Step Signifier Styling
const NextStepStepNum = styled.h4`
  font-size: 10px;
  font-family: "airbnb_cereal_appmedium";
  // font-weight: normal;
  margin-bottom: 0px;
  margin-top: 0px;
  color: #4a87e8;
`;

const NextStepTitle = styled.h4`
  font-size: 16px;
  font-family: "airbnb_cereal_appmedium";
  font-style: normal;
  font-weight: normal;
  margin-bottom: 4px;
  margin-top: 4px;
  color: #4a87e8;
`;

const NextStepOverview = styled.h4`
  font-size: 12px;
  font-family: "airbnb_cereal_appbook";
  font-weight: normal;
  margin-bottom: 15px;
  margin-top: 0px;
  color: #4a87e8;
`;

const NextStepStepDivider = styled.div`
  width: 100%;
  border: 1px solid #4a87e8;
`;
// Next Step Signifier Styling

const FormNavigation = styled.div`
  width: 60%;
  height: 10vh;
  position: fixed;
  bottom: 0;
  background-color: white;
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

export default function StartScreen3() {
  return (
    <PageContainer>
      <Header>
        <Logo>Family Recipe App</Logo>
        <ProgressHeader>Step 3: How do you make this recipe? </ProgressHeader>
      </Header>
      <ProgressBarDiv>
        <ProgressSignifier />
      </ProgressBarDiv>
      <FormContainer>
        <FieldsContainer>
          <StatusLayoutDiv>
            <StatusContainer>
              <Heading>How is it made? </Heading>
              {/*  */}
              <StepBox>
                <StepNum>STEP 1</StepNum>
                <CompletedDiv>
                  <Title>What’s the story?</Title>
                  <Check src={check} />
                </CompletedDiv>

                <Overview>Name, Category, Originator, Recipe Story</Overview>
                <StepDivider />
              </StepBox>
              {/*  */}
              <StepBox>
                <StepNum>STEP 2</StepNum>
                <CompletedDiv>
                  <Title>What can you expect from this recipe?</Title>
                  <Check src={check} />
                </CompletedDiv>

                <Overview>Prep Time, Allergies, Serving Size</Overview>
                <StepDivider />
              </StepBox>
              {/*  */}
              <StepBox>
                <NextStepStepNum>STEP 3</NextStepStepNum>
                <NextStepTitle>How do you make this recipe?</NextStepTitle>
                <NextStepOverview>Ingredients, Directions</NextStepOverview>
                <NextStepStepDivider />
              </StepBox>
              {/*  */}
            </StatusContainer>
          </StatusLayoutDiv>
          <FormNavigation>
            <ButtonDiv>
              <Link to="/the-expectations">
                <BackButton>Back</BackButton>
              </Link>
              <Link to="/the-ingredients">
                <NextButton>Next</NextButton>
              </Link>
            </ButtonDiv>
          </FormNavigation>
        </FieldsContainer>
        {/* <ContentConatiner></ContentConatiner> */}
      </FormContainer>
    </PageContainer>

    // <div>
    //   <header>
    //     <ul>
    //       <p>Secret Family Recipe App</p>
    //       <p>Step 3: How do you make this recipe?</p>
    //     </ul>
    //   </header>
    //   <h1>How is it made?</h1>
    //   <div>
    //     <StepDiv
    //       step="STEP 1"
    //       title="What's the story"
    //       overview="Name, Category, Originator, Recipe Story"
    //     />
    //     <StepDiv
    //       step="STEP 2"
    //       title="What can you expect from this recipe? "
    //       overview="Prep Time, Allergies, Serving Size"
    //     />
    //     <StepDiv
    //       step="STEP 3"
    //       title="How do you make this recipe?"
    //       overview="Ingredients, Directions"
    //     />
    //   </div>
    //   <br />
    //   <br />
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       width: "100vw",
    //       margin: "0 auto",
    //     }}
    //   >
    //     <Link>
    //       <button>Back</button>
    //     </Link>

    //     <br />
    //     <Link to="/the-ingredients">
    //       <button>Next</button>
    //     </Link>
    //   </div>
    // </div>
  );
}
