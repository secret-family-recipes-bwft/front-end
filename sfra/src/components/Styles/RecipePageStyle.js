import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import DummyData from "../../DummyData";
// import SecondaryButton from "./SecondaryButton";

const PageContainer = styled.div`
  width: 100vw;
  height: 3523px;
  display: flex;
  flex-direction: column;
  background-color: pink;
`;

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f46060;
`;

const RecipeImage = styled.img`
  width: 100vw;
  height: 100vh;
`;

const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  width: 100vw;
  height: 140px;
  // justify-content: space-between;
  // background-color: purple;
  position: absolute;
  top: 0px;
  // left: 16px;
`;

const Logo = styled.h2`
  font-family: "airbnb_cereal_appbold";
  font-size: 18px;
  margin-top: 40px;
  text-align: left;
  margin-left: 80px;
  color: white;
  flex-grow: 12;
  // background-color: green;
`;

const CreateButton = styled.button`
  width: 145px;
  height: 60px;

  background: white;
  border-radius: 5px;
  border: none;
  color: #317df6;

  font-size: 12px;
  font-family: "airbnb_cereal_appmedium";
  flex-grow: 1;
  margin-top: 40px;
  margin-right: 80px;
  margin-bottom: 0px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  // width: 200px;
  // background-color: green;
  // flex-grow: 1;
`;

const DetailsDiv = styled.div`
  width: 600px;
  height: 200px;
  // background-color: green;
  // flex-grow: 1;
  position: absolute;
  top: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 80px;
`;

const RecipeTitle = styled.h2`
  font-family: "airbnb_cereal_appbold";
  font-size: 52px;
  color: white;
  align-content: left;
`;

const OriginatorIntro = styled.h2`
  font-family: "airbnb_cereal_applight";
  font-weight: normal;
  font-size: 24px;
  color: white;
  align-content: left;
`;

const ContentWrapper = styled.div`
  width: 100vw;
  height: 2900px;
  display: flex;
  background-color: #f46060;
  margin-top: 100px;
`;

const HigherOrderContent = styled.div`
  width: 50vw;
  height: 2900px;
  display: flex;
  background-color: #ffc702;
  margin-top: 100px;
`;
// RecipeFacts

const RecipeFacts = styled.div`
  width: 50vw;
  height: 2900px;
  display: flex;
  background-color: #4a87e8;
  margin-top: 100px;
`;

const OriginatorDiv = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  background-color: green;
  // margin-top: 100px;
  align-items: center;
  justify-content: space-evenly;
`;

const OriginatorIMG = styled.img`
  width: 300px;
  height: 300px;
  display: flex;
  background-color: yellow;
  // margin-top: 100px;
  border-radius: 200px;
`;

const OriginatorDetailDiv = styled.div`
  width: 40%;
  height: 100%;
  background-color: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OriginatorTitle = styled.h3`
  font-size: 46px;
`;
const OriginatorName = styled.h3`
  font-size: 24px;
`;

export default function RecipePageStyle() {
  // const [recipeData, setRecipeData] = useState(DummyData);

  return (
    <PageContainer>
      <HeroContainer>
        <RecipeImage src="https://images.unsplash.com/photo-1586819286107-b4fb6cc7049f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1570&q=80"></RecipeImage>{" "}
        <OverLay />
        <Header>
          <Logo>Family Recipe App</Logo>
          <ButtonDiv>
            <CreateButton>+Create Recipe</CreateButton>
            <CreateButton>Edit</CreateButton>
          </ButtonDiv>
        </Header>
        <DetailsDiv>
          <RecipeTitle>Spaghetti and Meatballs</RecipeTitle>
          <OriginatorIntro>A recipe from Grandma Pearl</OriginatorIntro>
        </DetailsDiv>
      </HeroContainer>

      <ContentWrapper>
        <HigherOrderContent>
          <OriginatorDiv>
            <OriginatorIMG src="https://www.thedailymeal.com/sites/default/files/2020/03/03/00_hed_iStock.jpg" />
            <OriginatorDetailDiv>
              <OriginatorTitle>Orignator</OriginatorTitle>
              <OriginatorName>Grandma Pearl</OriginatorName>
            </OriginatorDetailDiv>
          </OriginatorDiv>
        </HigherOrderContent>
        <RecipeFacts></RecipeFacts>
      </ContentWrapper>
    </PageContainer>
  );
}
