import React from "react";
import styled from "styled-components";


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 350px;
  // justify-content: flex-start;
  // align-items: flex-start;
  // margin-right: 10px;
  // margin-left: 10px;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 266px;
  border-radius: 10px;
`;

const RecipeName = styled.p`
  font-family: "airbnb_cereal_appbook";
  text-align: left;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 0px;
  color: black;
`;

const PrepTime = styled.p`
  font-family: "airbnb_cereal_appbook";
  text-align: left;
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 0px;
  color: #797979;
`;

export default function RecipeCards({
  category,
  title,
  picture_url,
  prepTime,
}) {
  return (
    <CardWrapper>
      {/* <div>
        <h3>{category}</h3>
        <p>View More</p>
      </div> */}
      <RecipeImage src={picture_url} alt={title} />
      <RecipeName>{title}</RecipeName>
      <PrepTime>{prepTime}</PrepTime>
    </CardWrapper>
  );
}