import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import DummyData from "../../DummyData";
// import SecondaryButton from "./SecondaryButton";

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: pink;
`;

export default function RecipePageStyle() {
  // const [recipeData, setRecipeData] = useState(DummyData);

  return (
    <PageContainer>
      {/* <HeroContainer>
        <Header>
          <Logo></Logo>
          <ButtonDiv>
            <SecondaryButton />
            <SecondaryButton />
          </ButtonDiv>
        </Header>
        <RecipeImage />
        <RecipeTitle></RecipeTitle>
        <OriginatorIntro></OriginatorIntro>
      </HeroContainer>

      <ContentWrapper>
        <HigherOrderContent></HigherOrderContent>
        <RecipeFacts></RecipeFacts>
      </ContentWrapper> */}
    </PageContainer>
  );
}
