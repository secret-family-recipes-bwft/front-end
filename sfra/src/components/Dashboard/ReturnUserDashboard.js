import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeCards from "./RecipeCards";
import SecondaryButton from "../Styles/SecondaryButton";
import styled from "styled-components";
import DummyData from "../../DummyData";

const Header = styled.div`
  display: flex;
  width: 100%
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
  fontfamily: "airbnb_cereal_appbook";
  font-size: 24px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 510px;
  height: 40px;
  border: 1px solid #797979;
  border-radius: 30px;
  // margin-bottom: 120px;
`;
// CardContainer

const CardContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
`;

export default function ReturnUserDashboard() {
  const [search, setSearch] = useState({ search: "" }); // Stretch
  const [userRecipes, setUserRecipes] = useState(DummyData);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://bw-secret-family-recipes-1.herokuapp.com/api/users/:${id}/recipes`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  function handleChange(e) {
    setSearch({ ...search, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
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

      <CardContainer>
        {userRecipes.map((crrObj) => {
          return (
            <RecipeCards
              category={crrObj.category}
              title={crrObj.title}
              picture_url={crrObj.picture_url}
              prepTime={crrObj.prepTime}
            />
          );
        })}
      </CardContainer>
    </div>
  );
}
