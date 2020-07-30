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
  width: calc((100% / 9) * 7);
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

// Form Styling ---- ----- --- ----
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
// Form Styling ---- ----- --- ----
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
export default function Ingredients() {
  const defaultState = {
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    ingredient6: "",
    ingredient7: "",
    ingredient8: "",
    ingredient9: "",
    ingredient10: "",
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
              <Heading>What are the ingredients? </Heading>
              <form onSubmit={handleSubmit}>
                <InputDiv>
                  <TextInput
                    type="text"
                    name="ingredient1"
                    placeholder="Ingredient 1"
                    value={formState.ingredient1}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                <InputDiv>
                  <TextInput
                    type="text"
                    name="ingredient2"
                    placeholder="Ingredient 2"
                    value={formState.ingredient2}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                {/*  */}
                <InputDiv>
                  <TextInput
                    type="text"
                    name="ingredient3"
                    placeholder="Ingredient 3"
                    value={formState.ingredient3}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                {/*  */}
                <InputDiv>
                  <TextInput
                    type="text"
                    name="ingredient4"
                    placeholder="Ingredient 4"
                    value={formState.ingredient4}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                {/*  */}
                <InputDiv>
                  <TextInput
                    type="text"
                    name="ingredient5"
                    placeholder="Ingredient 5"
                    value={formState.ingredient5}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                {/*  */}
                <InputDiv>
                  <TextInput
                    type="text"
                    name="ingredient6"
                    placeholder="Ingredient 6"
                    value={formState.ingredient6}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                {/*  */}
                <InputDiv>
                  <TextInput
                    type="text"
                    name="ingredient7"
                    placeholder="Ingredient 7"
                    value={formState.ingredient7}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                {/*  */}
                <InputDiv>
                  <TextInput
                    type="text"
                    name="ingredient8"
                    placeholder="Ingredient 8"
                    value={formState.ingredient8}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                {/*  */}
                <InputDiv>
                  <TextInput
                    type="text"
                    name="ingredient9"
                    placeholder="Ingredient 9"
                    value={formState.ingredient9}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                {/*  */}
                <InputDiv>
                  <TextInput
                    type="text"
                    name="ingredient10"
                    placeholder="Ingredient 10"
                    value={formState.ingredient10}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                <div style={{ height: "200px" }} />
              </form>
            </StatusContainer>
          </StatusLayoutDiv>
          <FormNavigation>
            <ButtonDiv>
              <Link to="/start-screen-3">
                <BackButton>Back</BackButton>
              </Link>
              <Link to="/the-directions">
                <NextButton>Next</NextButton>
              </Link>
            </ButtonDiv>
          </FormNavigation>
        </FieldsContainer>
        {/* <ContentConatiner></ContentConatiner> */}
      </FormContainer>
    </PageContainer>
    // <div>
    //   <h1>What are the ingredients?</h1>
    //   <form onSubmit={handleSubmit}>
    //     <Input
    //       // label="What’s the name of your recipe?"
    //       type="text"
    //       name="ingredient1"
    //       placeholder="Ingredient 1"
    //       value={formState.ingredient1}
    //       onChange={handleChange}
    //     />
    //     <Input
    //       // label="What’s the name of your recipe?"
    //       type="text"
    //       name="ingredient2"
    //       placeholder="Ingredient 2"
    //       value={formState.ingredient2}
    //       onChange={handleChange}
    //     />
    //     <Input
    //       // label="What’s the name of your recipe?"
    //       type="text"
    //       name="ingredient3"
    //       placeholder="Ingredient 3"
    //       value={formState.ingredient3}
    //       onChange={handleChange}
    //     />
    //     <Input
    //       // label="What’s the name of your recipe?"
    //       type="text"
    //       name="ingredient4"
    //       placeholder="Ingredient 4"
    //       value={formState.ingredient4}
    //       onChange={handleChange}
    //     />

    //     <Input
    //       // label="What’s the name of your recipe?"
    //       type="text"
    //       name="ingredient5"
    //       placeholder="Ingredient 5"
    //       value={formState.ingredient5}
    //       onChange={handleChange}
    //     />
    //     <Input
    //       // label="What’s the name of your recipe?"
    //       type="text"
    //       name="ingredient6"
    //       placeholder="Ingredient 6"
    //       value={formState.ingredient6}
    //       onChange={handleChange}
    //     />
    //     <Input
    //       // label="What’s the name of your recipe?"
    //       type="text"
    //       name="ingredient7"
    //       placeholder="Ingredient 7"
    //       value={formState.ingredient7}
    //       onChange={handleChange}
    //     />
    //     <Input
    //       // label="What’s the name of your recipe?"
    //       type="text"
    //       name="ingredient8"
    //       placeholder="Ingredient 8"
    //       value={formState.ingredient8}
    //       onChange={handleChange}
    //     />
    //     <Input
    //       // label="What’s the name of your recipe?"
    //       type="text"
    //       name="ingredient9"
    //       placeholder="Ingredient 9"
    //       value={formState.ingredient9}
    //       onChange={handleChange}
    //     />
    //     <Input
    //       // label="What’s the name of your recipe?"
    //       type="text"
    //       name="ingredient10"
    //       placeholder="Ingredient 10"
    //       value={formState.ingredient10}
    //       onChange={handleChange}
    //     />

    //     <button>+Add Ingredient</button>

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
    //       <Link to="/the-directions">
    //         <button>Next</button>
    //       </Link>
    //     </div>
    //   </form>
    // </div>
  );
}
