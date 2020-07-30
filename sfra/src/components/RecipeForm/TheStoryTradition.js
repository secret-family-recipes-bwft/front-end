import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Input from "../Input";
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
  width: calc((100% / 9) * 3);
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

const InputDiv = styled.div`
  width: 100%;
  // height: 64px;
  // background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
`;

const FormLabel = styled.label`
  font-size: 14px;
  font-family: "airbnb_cereal_appmedium";
  font-weight: normal;
  text-align: left;
  width: 90%;
`;

const TextInput = styled.input`
  font-size: 14px;
  font-family: "airbnb_cereal_appbook";
  border: none;
  border-bottom: 1px solid #bdbdbd;
  width: 90%;
  margin-top: 20px;
`;

const TextAreaInput = styled.textarea`
  font-size: 14px;
  font-family: "airbnb_cereal_appbook";
  font-weight: normal;
  width: 90%;
  height: 200px;
  margin-top: 20px;
  margin-bottom: 200px;
  border: 1px solid #bdbdbd;
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

//

//

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

export default function TheStoryTradition() {
  const defaultState = {
    recipeOriginator: "",
    originatorImageURL: "",
    tradtion: "",
    story: "",
  };
  const [formState, setFormState] = useState(defaultState);
  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    formState(defaultState);
  }

  return (
    <PageContainer>
      <Header>
        <Logo>Family Recipe App</Logo>
        <ProgressHeader>Step 1: What’s the story? </ProgressHeader>
      </Header>
      <ProgressBarDiv>
        <ProgressSignifier />
      </ProgressBarDiv>
      <FormContainer>
        <FieldsContainer>
          <StatusLayoutDiv>
            <StatusContainer>
              <Heading>Share the story </Heading>
              <form onSubmit={handleSubmit}>
                <InputDiv>
                  <FormLabel htmlFor="recipeOriginator">
                    Who originated this recipe?
                  </FormLabel>
                  <TextInput
                    type="text"
                    name="recipeOriginator"
                    placeholder="Nonna Isabella"
                    value={formState.recipeOriginator}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                <InputDiv>
                  <FormLabel htmlFor="originatorImageURL">
                    Upload an image or originator
                  </FormLabel>
                  <TextInput
                    type="text"
                    name="originatorImageURL"
                    placeholder="Image of Nonna Isabella"
                    value={formState.originatorImageURL}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                <InputDiv>
                  <FormLabel htmlFor="tradtion">
                    When does your family usually make this recipe?
                  </FormLabel>
                  <TextInput
                    name="tradtion"
                    placeholder="The first night of Hanukkah"
                    value={formState.tradtion}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                <InputDiv>
                  <FormLabel htmlFor="story">
                    Is there a story around this recipe or memory you’d like to
                    share of when your family would eat this recipe?
                  </FormLabel>
                  <TextAreaInput
                    name="story"
                    placeholder="My favorite memory was when the whole family would help prepare this meal, while we would listen to  Billy Joel full blast ..."
                    value={formState.story}
                    onChange={handleChange}
                    // cols="10"
                    // rows="10"
                  />
                  {/* <textarea
                    name="tradition"
                    value={formState.tradition}
                    onChange={handleChange}
                    cols="300"
                    rows="1000"
                    placeholder="The first night of Hanukkah..."
                  /> */}
                </InputDiv>
              </form>
              {/* <StepBox>
                <NextStepStepNum>STEP 1</NextStepStepNum>
                <NextStepTitle>What’s the story?</NextStepTitle>
                <NextStepOverview>
                  Name, Category, Originator, Recipe Story
                </NextStepOverview>
                <NextStepStepDivider />
              </StepBox>

              <StepBox>
                <StepNum>STEP 2</StepNum>
                <Title>What can you expect from this recipe?</Title>
                <Overview>Prep Time, Allergies, Serving Size</Overview>
                <StepDivider />
              </StepBox>

              <StepBox>
                <StepNum>STEP 3</StepNum>
                <Title>How do you make this recipe?</Title>
                <Overview>Ingredients, Directions</Overview>
                <StepDivider />
              </StepBox> */}
            </StatusContainer>
          </StatusLayoutDiv>
          <FormNavigation>
            <ButtonDiv>
              <Link to="/the-story-basics">
                <BackButton>Back</BackButton>
              </Link>
              <Link to="/start-screen-2">
                <NextButton>Next</NextButton>
              </Link>
            </ButtonDiv>
          </FormNavigation>
        </FieldsContainer>
        {/* <ContentConatiner></ContentConatiner> */}
      </FormContainer>
    </PageContainer>

    // <div>
    //   <h1>Share the story </h1>
    //   <form onSubmit={handleSubmit}>
    //     <Input
    //       label="Who originated this recipe? "
    //       type="text"
    //       name="recipeOriginator"
    //       placeholder="Grandma Pearl"
    //       value={formState.recipeOriginator}
    //       onChange={handleChange}
    //     />
    //     <Input
    //       label="When does your family usually make this recipe?"
    //       type="text"
    //       name="originatorImageURL"
    //       value={formState.originatorImageURL}
    //       onChange={handleChange}
    //       placeholder="Image of Grandma Pearl"
    //     />{" "}
    //     <br />
    //     <br />
    //     <label htmlFor="tradition">
    //       When does your family usually make this recipe?
    //       <br />
    //       <textarea
    //         name="tradition"
    //         value={formState.tradition}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="10"
    //         placeholder="The first night of Hanukkah..."
    //       />
    //     </label>
    //     <br />
    //     <br />
    //     <label htmlFor="story">
    //       Is there a story around this recipe or memory you’d like to share of
    //       when your family would eat this recipe?
    //       <br />
    //       <textarea
    //         name="story"
    //         value={formState.story}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="10"
    //         placeholder="My favorite memory was when the whole family would help prepare this meal, while we would listen to  Billy Joel full blast ..."
    //       />
    //     </label>
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         width: "100vw",
    //         margin: "0 auto",
    //       }}
    //     >
    //       <Link>
    //         <button>Back</button>
    //       </Link>

    //       <br />
    //       <Link to="/start-screen-2">
    //         <button>Next</button>
    //       </Link>
    //     </div>
    //   </form>
    // </div>
  );
}
