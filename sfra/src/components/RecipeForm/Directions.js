import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../Input";
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
  width: calc((100% / 9) * 8);
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

// Form Styling ---- ----- -----
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
  height: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #bdbdbd;
`;

const TextAreaInputLast = styled.textarea`
  font-size: 14px;
  font-family: "airbnb_cereal_appbook";
  font-weight: normal;
  width: 90%;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 200px;
  border: 1px solid #bdbdbd;
`;
// Form Styling ---- ----- -----
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

export default function Directions() {
  const defaultState = {
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
    step6: "",
    step7: "",
    step8: "",
    step9: "",
    step10: "",
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
        <ProgressHeader>Step 3: How do you make this recipe? </ProgressHeader>
      </Header>
      <ProgressBarDiv>
        <ProgressSignifier />
      </ProgressBarDiv>
      <FormContainer>
        <FieldsContainer>
          <StatusLayoutDiv>
            <StatusContainer>
              <Heading>What are the directions?</Heading>
              <form onSubmit={handleSubmit}>
                {/*  */}
                <InputDiv>
                  <TextAreaInput
                    name="step1"
                    placeholder="Step 1"
                    value={formState.step1}
                    onChange={handleChange}
                    // cols="10"
                    // rows="10"
                  />
                </InputDiv>
                {/*  */}
                <InputDiv>
                  <TextAreaInput
                    name="step2"
                    placeholder="Step 2"
                    value={formState.step2}
                    onChange={handleChange}
                    // cols="10"
                    // rows="10"
                  />
                </InputDiv>
                {/*  */}
                <InputDiv>
                  <TextAreaInput
                    name="step3"
                    placeholder="Step 3"
                    value={formState.step3}
                    onChange={handleChange}
                    // cols="10"
                    // rows="10"
                  />
                </InputDiv>
                {/*  */}
                <InputDiv>
                  <TextAreaInput
                    name="step4"
                    placeholder="Step 4"
                    value={formState.step4}
                    onChange={handleChange}
                    // cols="10"
                    // rows="10"
                  />
                </InputDiv>
                {/*  */}
                <InputDiv>
                  <TextAreaInputLast
                    name="step5"
                    placeholder="Step 5"
                    value={formState.step5}
                    onChange={handleChange}
                    // cols="10"
                    // rows="10"
                  />
                </InputDiv>
                {/*  */}
              </form>
            </StatusContainer>
          </StatusLayoutDiv>
          <FormNavigation>
            <ButtonDiv>
              <Link to="/the-ingredients">
                <BackButton>Back</BackButton>
              </Link>
              <Link to="/recipe-created-success">
                <NextButton>Next</NextButton>
              </Link>
            </ButtonDiv>
          </FormNavigation>
        </FieldsContainer>
        {/* <ContentConatiner></ContentConatiner> */}
      </FormContainer>
    </PageContainer>

    // <div>
    //   <h1>What are the directions?</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="step1">
    //       <br />
    //       <textarea
    //         name="step1"
    //         value={formState.step1}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 1"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step2">
    //       <br />
    //       <textarea
    //         name="step2"
    //         value={formState.step2}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 2"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step3">
    //       <br />
    //       <textarea
    //         name="step3"
    //         value={formState.step3}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 3"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step4">
    //       <br />
    //       <textarea
    //         name="step4"
    //         value={formState.step4}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 4"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step5">
    //       <br />
    //       <textarea
    //         name="step5"
    //         value={formState.step5}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 5"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step6">
    //       <br />
    //       <textarea
    //         name="step6"
    //         value={formState.step6}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 6"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step7">
    //       <br />
    //       <textarea
    //         name="step7"
    //         value={formState.step7}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 7"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step8">
    //       <br />
    //       <textarea
    //         name="step8"
    //         value={formState.step8}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 8"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step9">
    //       <br />
    //       <textarea
    //         name="step9"
    //         value={formState.step9}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 9"
    //       />
    //     </label>
    //     <br />
    //     <label htmlFor="step10">
    //       <br />
    //       <textarea
    //         name="step10"
    //         value={formState.step10}
    //         onChange={handleChange}
    //         cols="30"
    //         rows="4"
    //         placeholder="Step 10"
    //       />
    //     </label>

    //     <br />
    //     <br />
    //     <button>+Add Step</button>
    //     <br />
    //     <br />
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
    //       <Link to="/recipe-created-success">
    //         <button>Next</button>
    //       </Link>
    //     </div>
    //   </form>
    // </div>
  );
}
