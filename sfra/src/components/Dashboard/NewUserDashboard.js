import React, { useState } from "react";
import { Link } from "react-router-dom";
import SecondaryButton from "../Styles/SecondaryButton";
import styled from "styled-components";

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
      <Header>
        <Link style={{ textDecoration: "none" }} to="/dash">
          <Logo>Family Recipe App</Logo>
        </Link>

        <Link to="/start-screen">
          <SecondaryButton action="+Create Recipe" />
        </Link>
      </Header>

      <div>
        <h2>Search Recipes</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={search.search}
            onChange={handleChange}
          />
        </form>
      </div>

      <div>
        <h3>Oh no! You don’t have any recipes</h3>
        <Link to="/start-screen">
          <p>+Create First Recipe</p>
        </Link>
      </div>
    </div>
  );
}
