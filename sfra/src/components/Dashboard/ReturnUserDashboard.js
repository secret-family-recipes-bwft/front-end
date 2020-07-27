import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeCards from "./RecipeCards";

export default function ReturnUserDashboard() {
  const [search, setSearch] = useState({ search: "" });
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://bw-secret-family-recipes-1.herokuapp.com/api/recipes")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleChange(e) {
    setSearch({ ...search, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Welcome Back!!</h1>
      <header>
        <ul>
          <Link to="/dash">
            <p>Secret Family Recipe App</p>
          </Link>
          <Link to="/start-screen">
            <button>+Create Recipe</button>
          </Link>
        </ul>
      </header>

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

        <RecipeCards />
      </div>
    </div>
  );
}
