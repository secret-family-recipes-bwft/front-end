import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import country from "./country.svg";
import overview from "./overview.svg";
import arrow from "./arrow.svg";
// import DummyData from "../../DummyData";
// import SecondaryButton from "./SecondaryButton";

const PageContainer = styled.div`
  width: 100vw;
  height: 3523px;
  display: flex;
  flex-direction: column;
  // background-color: pink;
`;

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  // background-color: #f46060;
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
<<<<<<< HEAD
=======

>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
  background: white;
  border-radius: 5px;
  border: none;
  color: #317df6;
<<<<<<< HEAD
=======

>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
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
  // width: 800px;
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
  font-size: 64px;
  color: white;
  align-content: left;
  margin-bottom: 0px;
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
  // background-color: #f46060;
  margin-top: 100px;
`;

const HigherOrderContent = styled.div`
  width: 50vw;
  height: 2900px;
  display: flex;
  flex-direction: column;
  // background-color: #ffc702;
  margin-top: 100px;
  align-items: flex-start;
  padding-left: 80px;
`;

const RecipeFacts = styled.div`
  width: 50vw;
  height: 2900px;
  display: flex;
  flex-direction: column;
  // background-color: #4a87e8;
  margin-top: 100px;
  align-items: center;
`;

const OriginatorDiv = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  // background-color: green;
  // margin-top: 100px;
  align-items: center;
  justify-content: space-evenly;
`;

const OriginatorIMG = styled.img`
  width: 185px;
  height: 185px;
  display: flex;
  background-color: yellow;
  // margin-top: 100px;
  border-radius: 200px;
`;

const OriginatorDetailDiv = styled.div`
  width: 40%;
  height: 100%;
  // background-color: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OriginatorTitle = styled.h3`
  font-size: 46px;
  font-family: "La Belle Aurore", cursive;
  font-weight: normal;
  margin-bottom: 0px;
  text-align: left;
`;

const OriginatorName = styled.h3`
  margin-top: 0px;
  margin-bottom: 80px;
  font-size: 20px;
  text-align: left;
`;

const CountryDiv = styled.div`
  width: 300px;
  height: 100px;
  background: #f7f7f7;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const SvgIMG = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 40px;
`;

const CountryDetailsDiv = styled.div`
  width: 70%;
  height: 100%;
  // background: purple;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Question = styled.h3`
  font-size: 16px;
  text-align: left;
  margin-left: 30px;
  margin-bottom: 5px;
  color: #484848;
  font-family: "airbnb_cereal_appmedium";
  // font-weight: normal;
`;

const Answer = styled.h3`
  font-size: 16px;
  text-align: left;
  margin-left: 30px;
  margin-top: 2px;
  color: #484848;
  font-family: "airbnb_cereal_appmedium";
  font-weight: normal;
`;

const TextDiv = styled.div`
  margin-top: 64px;
  width: 400px;
`;

const STitle = styled.h1`
  font-family: "airbnb_cereal_appmedium";
  font-size: 24px;
  font-weight: normal;
  text-align: left;
`;

const SBody = styled.p`
  // font-family: "airbnb_cereal_appmedium";
  font-size: 18px;
  font-weight: normal;
  text-align: left;
  line-height: 30px;
`;

const TTitle = styled.h1`
  margin-top: 80px;
  font-family: "airbnb_cereal_appmedium";
  font-size: 24px;
  font-weight: normal;
  text-align: left;
`;

const TBody = styled.p`
  // font-family: "airbnb_cereal_appmedium";
  font-size: 18px;
  font-weight: normal;
  text-align: left;
  line-height: 30px;
`;

const RecipeOverViewDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 430px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  justify-content: center;
  align-items: center;
`;

const InnerDiv = styled.div`
  width: 280px;
  height: 330px;
  // background: pink;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const RecipeOverview = styled.h1`
  font-size: 24px;
  font-family: "airbnb_cereal_appmedium";
  font-weight: normal;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const OverviewIMG = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const BasicDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

const BasicTitle = styled.h3`
  font-size: 20px;
  font-family: "airbnb_cereal_appmedium";
  font-weight: normal;
`;

const BasicDetail = styled.p`
  font-size: 20px;
  font-family: "airbnb_cereal_appbook";
`;

const HowTo = styled.div`
  display: flex;
  flex-direction: column;
  // margin-top: 100px;
  // background: pink;
`;

const IngredientsDiv = styled.div`
  display: flex;
  // background: pink;
  width: 380px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
  margin-top: 100px;
`;

const Ingredient = styled.h1`
  font-size: 24px;
  font-family: "airbnb_cereal_appmedium";
  font-weight: normal;
`;

const ArrowIMG = styled.img`
  width: 30px;
  height: 30px;
`;

const Divider = styled.div`
  width: 380px;
  border: 1px solid #000000;
  margin-top: 0px;
`;

const IngredientItem = styled.p`
  font-size: 18px;
  font-family: "airbnb_cereal_appbook";
  font-weight: normal;
  color: black;
  margin-top: 20px;
`;

const DividerItem = styled.div`
  width: 380px;
  height: 0px;
  border: 0.1px solid #bdbdbd;
  margin-top: 0px;
`;
// IngredientsItemDiv
const IngredientsItemDiv = styled.div`
  display: flex;
  // background: pink;
  width: 380px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
  margin-top: 2px;
`;

const Step = styled.h3`
  margin-top: 50px;
  font-size: 14px;
  font-family: "airbnb_cereal_appbold";
  font-weight: normal;
`;

const StepItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0px;
`;

const StepItem = styled.p`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 380px;
  text-align: left;
  font-size: 18px;
  line-height: 25px;
  font-family: "airbnb_cereal_appbook";
  font-weight: normal;
`;

export default function RecipePageStyle() {
  // const [recipeData, setRecipeData] = useState(DummyData);

  return (
    <PageContainer>
      <HeroContainer>
        <RecipeImage src="https://images.unsplash.com/photo-1586819286107-b4fb6cc7049f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1570&q=80" />
        <OverLay />
        <Header>
<<<<<<< HEAD
          <Logo>Family Recipe App</Logo>
          <ButtonDiv>
            <CreateButton>+Create Recipe</CreateButton>
            <CreateButton>Edit</CreateButton>
          </ButtonDiv>
=======
          <Link style={{ textDecoration: "none" }} to="/return-user-dash">
            <Logo>Family Recipe App</Logo>
          </Link>

          {/* <ButtonDiv>
            <CreateButton>+Create Recipe</CreateButton>
            <CreateButton>Edit</CreateButton>
          </ButtonDiv> */}
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
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
          <CountryDiv>
            <SvgIMG src={country} />
            <CountryDetailsDiv>
              <Question>Country of Origin</Question>
              <Answer>Italy</Answer>
            </CountryDetailsDiv>
          </CountryDiv>
          <TextDiv>
            <STitle>Story</STitle>
            <SBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </SBody>
            <TTitle>The Family Tradition</TTitle>
            <TBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </TBody>
          </TextDiv>
        </HigherOrderContent>
        <RecipeFacts>
          <RecipeOverViewDiv>
            <InnerDiv>
              <OverviewIMG src={overview} />
              <RecipeOverview>Recipe Overview</RecipeOverview>
              <BasicDiv>
                <BasicTitle>Prep Time</BasicTitle>{" "}
                <BasicDetail>90 min</BasicDetail>{" "}
              </BasicDiv>
              <BasicDiv>
                <BasicTitle>Serving Size</BasicTitle>{" "}
                <BasicDetail>3-5 people</BasicDetail>{" "}
              </BasicDiv>
              <BasicDiv>
                <BasicTitle>Allergies</BasicTitle>{" "}
                <BasicDetail>Nuts, Soy</BasicDetail>{" "}
              </BasicDiv>
              <BasicDiv>
                <BasicTitle>Category</BasicTitle>{" "}
                <BasicDetail>Dinner</BasicDetail>{" "}
              </BasicDiv>
            </InnerDiv>
          </RecipeOverViewDiv>

          <HowTo>
            <IngredientsDiv>
              <Ingredient>Ingredients</Ingredient>
              <ArrowIMG src={arrow} />
            </IngredientsDiv>
            <Divider />
            <IngredientsItemDiv>
              <IngredientItem>1 pound ground beef</IngredientItem>
            </IngredientsItemDiv>
            <DividerItem />
            <IngredientsItemDiv>
              <IngredientItem>1 pound ground beef</IngredientItem>
            </IngredientsItemDiv>
            <DividerItem />
            <IngredientsItemDiv>
              <IngredientItem>1 pound ground beef</IngredientItem>
            </IngredientsItemDiv>
            <DividerItem />
            <IngredientsItemDiv>
              <IngredientItem>1 pound ground beef</IngredientItem>
            </IngredientsItemDiv>
            <DividerItem />
            <IngredientsItemDiv>
              <IngredientItem>1 pound ground beef</IngredientItem>
            </IngredientsItemDiv>
            <DividerItem />
            <IngredientsItemDiv>
              <IngredientItem>1 pound ground beef</IngredientItem>
            </IngredientsItemDiv>
            <DividerItem />
            <IngredientsItemDiv>
              <IngredientItem>1 pound ground beef</IngredientItem>
            </IngredientsItemDiv>
            <DividerItem />
            <IngredientsItemDiv>
              <IngredientItem>1 pound ground beef</IngredientItem>
            </IngredientsItemDiv>
            <DividerItem />

            <IngredientsDiv>
              <Ingredient>Directions</Ingredient>
              <ArrowIMG src={arrow} />
            </IngredientsDiv>
            <Divider />

            <StepItemDiv>
              <Step>STEP 1</Step>
              <StepItem>
                Combine ground beef, onion, garlic, and green pepper in a large
                saucepan. Cook and stir until meat is brown and vegetables are
                tender. Drain grease.
              </StepItem>
            </StepItemDiv>
            <DividerItem />

            <StepItemDiv>
              <Step>STEP 2</Step>
              <StepItem>
                Stir diced tomatoes, tomato sauce, and tomato paste into the
                pan. Season with oregano, basil, salt, and pepper. Simmer
                spaghetti sauce for 1 hour, stirring occasionally.
              </StepItem>
            </StepItemDiv>
            <DividerItem />
          </HowTo>
        </RecipeFacts>
      </ContentWrapper>
    </PageContainer>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
