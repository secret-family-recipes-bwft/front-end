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
  width: calc((100% / 9) * 5);
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

// Form Styles ------- -------
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

const CheckBoxLabel = styled.label`
  font-size: 14px;
  color: black;
  font-family: "airbnb_cereal_appbook";
  display: flex;
  align-items: flex-end;
  // background: red;
  // margin-right: 40px;
  width: 90px;
  margin-bottom: 30px;
`;

const CheckBoxInput = styled.input`
  width: 12px;
  height: 12px;
  border: 1px solid #c4c4c4;
`;

const CheckDiv = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  // background: pink;
  margin-top: 30px;
`;

// Form Styles ------- -------

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

export default function Expectations() {
  const defaultState = {
    prepTime: "",
    servingSize: "",
    none: false,
    shellFish: false,
    nuts: false,
    soy: false,
    milk: false,
    wheat: false,
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
        <ProgressHeader>
          Step 2: What can you expect from this recipe?{" "}
        </ProgressHeader>
      </Header>
      <ProgressBarDiv>
        <ProgressSignifier />
      </ProgressBarDiv>
      <FormContainer>
        <FieldsContainer>
          <StatusLayoutDiv>
            <StatusContainer>
              <Heading>Set the expectations</Heading>
              <form onSubmit={handleSubmit}>
                <InputDiv>
                  <FormLabel htmlFor="prepTime">
                    How long does this recipe take to make?
                  </FormLabel>
                  <SelectInput
                    name="prepTime"
                    value={formState.prepTime}
                    onChange={handleChange}
                  >
                    <OptionStyle value="30 min">30 min</OptionStyle>
                    <OptionStyle value="45 min">45 min</OptionStyle>
                    <OptionStyle value="60 min">60 min</OptionStyle>
                    <OptionStyle value="90 min">90 min</OptionStyle>
                    <OptionStyle value="120 min">120 min</OptionStyle>
                  </SelectInput>
                </InputDiv>
                {/*  */}
                <InputDiv>
                  <FormLabel htmlFor="servingSize">
                    How many people will this recipe feed?
                  </FormLabel>
                  <SelectInput
                    name="servingSize"
                    value={formState.servingSize}
                    onChange={handleChange}
                  >
                    <OptionStyle value="1-3 people">1-3 people</OptionStyle>
                    <OptionStyle value="3-5 people">3-5 people</OptionStyle>
                    <OptionStyle value="5-7 people">5-7 people</OptionStyle>
                  </SelectInput>
                </InputDiv>
                {/*  */}
                <InputDiv>
                  <FormLabel htmlFor="allergies">
                    Give people a heads up on common allergies
                  </FormLabel>
                  <CheckDiv>
                    <CheckBoxLabel>
                      <CheckBoxInput
                        type="checkbox"
                        name="none"
                        id="none"
                        value={formState.none}
                        onChange={handleChange}
                      />
                      None
                    </CheckBoxLabel>
                    {/*  */}
                    <CheckBoxLabel>
                      <CheckBoxInput
                        type="checkbox"
                        name="shellFish"
                        id="shellFish"
                        value={formState.shellFish}
                        onChange={handleChange}
                      />
                      Shell Fish
                    </CheckBoxLabel>
                    {/*  */}
                    <CheckBoxLabel>
                      <CheckBoxInput
                        type="checkbox"
                        name="nuts"
                        id="nuts"
                        value={formState.nuts}
                        onChange={handleChange}
                      />
                      Nuts
                    </CheckBoxLabel>
                    {/*  */}
                    <CheckBoxLabel>
                      <CheckBoxInput
                        type="checkbox"
                        name="soy"
                        id="soy"
                        value={formState.soy}
                        onChange={handleChange}
                      />
                      Soy
                    </CheckBoxLabel>
                    {/*  */}
                    <CheckBoxLabel>
                      <CheckBoxInput
                        type="checkbox"
                        name="milk"
                        id="milk"
                        value={formState.milk}
                        onChange={handleChange}
                      />
                      Milk
                    </CheckBoxLabel>
                    {/*  */}
                    <CheckBoxLabel>
                      <CheckBoxInput
                        type="checkbox"
                        name="wheat"
                        id="wheat"
                        value={formState.wheat}
                        onChange={handleChange}
                      />
                      Wheat
                    </CheckBoxLabel>
                  </CheckDiv>
                </InputDiv>
              </form>
            </StatusContainer>
          </StatusLayoutDiv>
          <FormNavigation>
            <ButtonDiv>
              <Link to="/start-screen-2">
                <BackButton>Back</BackButton>
              </Link>
              <Link to="/start-screen-3">
                <NextButton>Next</NextButton>
              </Link>
            </ButtonDiv>
          </FormNavigation>
        </FieldsContainer>
        {/* <ContentConatiner></ContentConatiner> */}
      </FormContainer>
    </PageContainer>
    // <div>
    //   <h1>Set the expectations</h1>
    //   <form onSubmit={handleSubmit}>
    //     <Input
    //       label="How long does this recipe take to make?"
    //       type="text"
    //       name="prepTime"
    //       placeholder="90 minutes"
    //       value={formState.prepTime}
    //       onChange={handleChange}
    //     />
    //     <label htmlFor="servingSize">
    //       What type of recipe is this?
    //       <br />
    //       <select
    //         name="servingSize"
    //         value={formState.servingSize}
    //         onChange={handleChange}
    //       >
    //         <option value="1-3people">1-3 people</option>
    //         <option value="3-5people">3-5 people</option>
    //         <option value="5-7people">5-7 people</option>
    //         <option value="7+people">7+ people</option>
    //       </select>
    //     </label>
    //     <br />
    //     <br />
    //     <div className="allergy-wrapper">
    //       <label htmlFor="">Give people a heads up on common allergies</label>
    //       <br />
    //       <br />
    //       <label htmlFor="none">
    //         None
    //         <input
    //           type="checkbox"
    //           name="none"
    //           id="none"
    //           value={formState.none}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <label htmlFor="shellFish">
    //         Shell Fish
    //         <input
    //           type="checkbox"
    //           name="shellFish"
    //           id="shellFish"
    //           value={formState.shellFish}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <label htmlFor="nuts">
    //         Nuts
    //         <input
    //           type="checkbox"
    //           name="nuts"
    //           id="nuts"
    //           value={formState.nuts}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <br />
    //       <label htmlFor="soy">
    //         Soy
    //         <input
    //           type="checkbox"
    //           name="soy"
    //           id="soy"
    //           value={formState.soy}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <label htmlFor="milk">
    //         Milk
    //         <input
    //           type="checkbox"
    //           name="milk"
    //           id="milk"
    //           value={formState.milk}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <label htmlFor="wheat">
    //         Wheat
    //         <input
    //           type="checkbox"
    //           name="wheat"
    //           id="wheat"
    //           value={formState.wheat}
    //           onChange={handleChange}
    //         />
    //       </label>
    //     </div>
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
    //       <Link to="/start-screen-3">
    //         <button>Next</button>
    //       </Link>
    //     </div>
    //   </form>
    // </div>
  );
}
