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
  width: calc((100% / 9) * 2);
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
  height: 64px;
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
`;

const TextInput = styled.input`
  font-size: 14px;
  font-family: "airbnb_cereal_appbook";
  border: none;
  border-bottom: 1px solid #bdbdbd;
  width: 90%;
  margin-top: 20px;
`;

const SelectInput = styled.select`
  font-size: 14px;
  font-family: "airbnb_cereal_appbook";
  // color: #bdbdbd;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  width: 90%;
  margin-top: 20px;
`;

const OptionStyle = styled.option`
  font-size: 14px;
  font-family: "airbnb_cereal_appbook";
  background-color: white;
  color: #bdbdbd;
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

export default function TheStoryBasics() {
  const defaultState = {
    title: "",
    picture_url: "",
    category: "",
    originCountry: "",
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
        <Logo>kin cook</Logo>
        <ProgressHeader>Step 1: What’s the story? </ProgressHeader>
      </Header>
      <ProgressBarDiv>
        <ProgressSignifier />
      </ProgressBarDiv>
      <FormContainer>
        <FieldsContainer>
          <StatusLayoutDiv>
            <StatusContainer>
              <Heading>The basics</Heading>

              <form onSubmit={handleSubmit}>
                <InputDiv>
                  <FormLabel htmlFor="tile">
                    What’s the name of your recipe?
                  </FormLabel>
                  <TextInput
                    type="text"
                    name="title"
                    placeholder="Recipe name"
                    value={formState.title}
                    onChange={handleChange}
                  />
                </InputDiv>
                {/*  */}
                <InputDiv>
                  <FormLabel htmlFor="picture_url">
                    Upload an image of recipe
                  </FormLabel>
                  <TextInput
                    type="text"
                    name="picture_url"
                    placeholder="Image of recipe"
                    value={formState.picture_url}
                    onChange={handleChange}
                  />
                </InputDiv>
                <InputDiv>
                  <FormLabel htmlFor="category">
                    What type of recipe is this?
                  </FormLabel>
                  <SelectInput
                    name="category"
                    value={formState.category}
                    onChange={handleChange}
                  >
                    <OptionStyle value="Breakfast">Breakfast</OptionStyle>
                    <OptionStyle value="Lunch">Lunch</OptionStyle>
                    <OptionStyle value="Dinner">Dinner</OptionStyle>
                    <OptionStyle value="Dessert">Dessert</OptionStyle>
                    <OptionStyle value="Snack">Snack</OptionStyle>
                    <OptionStyle value="Drink">Drink</OptionStyle>
                  </SelectInput>
                </InputDiv>
                {/*  */}
                <InputDiv>
                  <FormLabel htmlFor="originCountry">
                    What counrty is does this originate from?
                  </FormLabel>
                  <TextInput
                    name="originCountry"
                    placeholder="Italy"
                    value={formState.originCountry}
                    onChange={handleChange}
                  />
                </InputDiv>
              </form>
            </StatusContainer>
          </StatusLayoutDiv>

          <FormNavigation>
            <ButtonDiv>
              <Link to="/start-screen">
                <BackButton>Back</BackButton>
              </Link>
              <Link to="/the-story-tradition">
                <NextButton>Next</NextButton>
              </Link>
            </ButtonDiv>
          </FormNavigation>
        </FieldsContainer>
        {/* <ContentConatiner></ContentConatiner> */}
      </FormContainer>
    </PageContainer>
    // <div>
    //   <h1>The Basics</h1>
    //   <form onSubmit={handleSubmit}>
    //     <Input
    //       label="What’s the name of your recipe?"
    //       type="text"
    //       name="title"
    //       placeholder="Recipe Name"
    //       value={formState.title}
    //       onChange={handleChange}
    //     />
    //     <Input
    //       label="Upload an image"
    //       type="text"
    //       name="picture_url"
    //       value={formState.picture_url}
    //       onChange={handleChange}
    //       placeholder="Image of recipe"
    //     />{" "}
    //     <label htmlFor="category">
    //       What type of recipe is this?
    //       <br />
    //       <select
    //         name="category"
    //         value={formState.category}
    //         onChange={handleChange}
    //       >
    //         <option value="Breakfast">Breakfast</option>
    //         <option value="Lunch">Lunch</option>
    //         <option value="Dinner">Dinner</option>
    //         <option value="Dessert">Dessert</option>
    //         <option value="Snack">Snack</option>
    //       </select>
    //     </label>
    //     <br />
    //     <br />
    //     <Input
    //       label="Country of Origin "
    //       type="text"
    //       name="originCountry"
    //       value={formState.originCountry}
    //       onChange={handleChange}
    //       placeholder="Italy"
    //     />
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
    //       <Link to="/the-story-tradition">
    //         <button>Next</button>
    //       </Link>
    //     </div>
    //   </form>
    // </div>
  );
}
