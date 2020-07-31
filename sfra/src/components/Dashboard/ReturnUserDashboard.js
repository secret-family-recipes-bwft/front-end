import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import RecipeCards from "./RecipeCards";
import SecondaryButton from "../Styles/SecondaryButton";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/AxiosWithAuth";
import { UserContext } from "../../contexts/UserContext";
import { SetUserRecipesContext } from "../../contexts/SetUserRecipeContext";
import { SetUsersContext } from "../../contexts/SetUsersContext";
import { UserRecipesContext } from "../../contexts/RecipeContext";

const Header = styled.div`
  display: flex;
  width: 100%;
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
  font-family: "airbnb_cereal_appbook";
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
// CardContainer

const CardContainer = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: space-evenly;
  // background-color: pink;
`;

export default function ReturnUserDashboard() {

  const {users} = useContext(UserContext);
  const {setUsers} = useContext(SetUsersContext);
  const {userRecipes} = useContext(UserRecipesContext);
  const {setUserRecipes} = useContext(SetUserRecipesContext);

  const [search, setSearch] = useState({ search: "" });

  const id = localStorage.getItem('user ID')
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
    .get(`https://bw-secret-family-recipes-1.herokuapp.com/api/users/${id}`)
    .then((res) => {
      console.log(res.data)
      setUsers(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [id])


  useEffect(() => {
    axiosWithAuth()
      .get(`https://bw-secret-family-recipes-1.herokuapp.com/api/users/${id}/recipes`)
      .then((res) => {
        console.log(res.data);
        setUserRecipes(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
