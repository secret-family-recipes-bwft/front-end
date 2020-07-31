import React, { useState } from "react";
import { Link } from "react-router-dom";
import SecondaryButton from "../Styles/SecondaryButton";
import styled from "styled-components";
import noRecipe from "./noRecipe.svg";

<<<<<<< HEAD

const Header = styled.div`
  display: flex;
  width: 100%;
=======
const Header = styled.div`
  display: flex;
  width: 100%
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
  height: 140px;
  justify-content: space-between;
`;

const Logo = styled.h2`
  font-family: "airbnb_cereal_appbold";
  font-size: 18px;
  margin-top: 40px;
  margin-left: 80px;
  color: black;
  flex-grow: 6;
`;

const SearchDiv = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SearchHeading = styled.h3`
<<<<<<< HEAD
  font-family: "airbnb_cereal_appbook";
=======
  fontfamily: "airbnb_cereal_appbook";
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
  font-size: 24px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 510px;
  height: 30px;
  border: 1px solid #797979;
  border-radius: 30px;
  // margin-bottom: 120px;
`;

const ContentDivider = styled.div`
  width: 860px;
  height: 0px;
  border: 1px solid #bdbdbd;
  margin: 0 auto;
  margin-top: 120px;
`;

const OoppsDiv = styled.div`
height: 400px;
<<<<<<< HEAD
width: 100%;
=======
width: 100%
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 90px;
`;

const OoppsImg = styled.img`
  width: 150px;
  height: 150px;
`;

const OoppsMSG = styled.h3`
<<<<<<< HEAD
  font-family: "airbnb_cereal_appbook";
=======
  fontfamily: "airbnb_cereal_appbook";
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
  font-size: 24px;
  margin-bottom: 20px;
  color: #bdbdbd;
`;

const CreateRecipeLink = styled.p`
  color: #317df6;
  font-size: 18px;
  font-family: "airbnb_cereal_appmedium";
`;

export default function NewUserDashboard() {
  const [search, setSearch] = useState({ search: "" });
  function handleChange(e) {
    setSearch({ ...search, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
<<<<<<< HEAD
    <Header>
      <Link style={{ textDecoration: "none" }} to="/dash">
        <Logo>Family Recipe App</Logo>
      </Link>

      <Link to="/start-screen">
        <SecondaryButton action="+Create Recipe" />
      </Link>
    </Header>

    <SearchDiv>
      <SearchHeading>Search Recipes</SearchHeading>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="search"
          value={search.search}
          onChange={handleChange}
        />
      </form>
    </SearchDiv>

    <ContentDivider />

    <OoppsDiv>
      <OoppsImg src={noRecipe} alt="kitchen" />

      <OoppsMSG>Oh no! You don’t have any recipes</OoppsMSG>
      <Link style={{ textDecoration: "none" }} to="/start-screen">
        <CreateRecipeLink>+Create First Recipe</CreateRecipeLink>
      </Link>
    </OoppsDiv>
  </div>
=======
      <Header>
        <Link style={{ textDecoration: "none" }} to="/dash">
          <Logo>Family Recipe App</Logo>
        </Link>

        <Link to="/start-screen">
          <SecondaryButton action="+Create Recipe" />
        </Link>
      </Header>

      <SearchDiv>
        <SearchHeading>Search Recipes</SearchHeading>
        <form onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            name="search"
            value={search.search}
            onChange={handleChange}
          />
        </form>
      </SearchDiv>

      <ContentDivider />

      <OoppsDiv>
        <OoppsImg src={noRecipe} alt="kitchen" />

        <OoppsMSG>Oh no! You don’t have any recipes</OoppsMSG>
        <Link style={{ textDecoration: "none" }} to="/start-screen">
          <CreateRecipeLink>+Create First Recipe</CreateRecipeLink>
        </Link>
      </OoppsDiv>
    </div>
>>>>>>> f0896be2e3f1344b75346ba0b1a832fc8b3147f3
  );
}
//testing