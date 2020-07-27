import React, { useState } from "react";
import { Link } from "react-router-dom";

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
