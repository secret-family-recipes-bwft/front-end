import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input";

export default function TheStoryBasics() {
  const defaultState = {
    recipeName: "",
    recipeImageURL: "",
    recipeType: "",
    originCountry: "",
  };
  const [formState, setFormState] = useState(defaultState);
  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    formState(defaultState);
  }

  return (
    <div>
      <h1>The Basics</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="What’s the name of your recipe?"
          type="text"
          name="recipeName"
          placeholder="Recipe Name"
          value={formState.recipeName}
          onChange={handleChange}
        />
        <Input
          label="Upload an image"
          type="text"
          name="recipeImageURL"
          value={formState.recipeImageURL}
          onChange={handleChange}
          placeholder="Image of recipe"
        />{" "}
        <label htmlFor="recipeType">
          What type of recipe is this?
          <br />
          <select
            name="recipeType"
            value={formState.recipeType}
            onChange={handleChange}
          >
            <option value="RecipeType">Recipe Type</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Snack">Snack</option>
          </select>
        </label>
        <br />
        <br />
        <Input
          label="Country of Origin "
          type="text"
          name="originCountry"
          value={formState.originCountry}
          onChange={handleChange}
          placeholder="Italy"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            margin: "0 auto",
          }}
        >
          <Link>
            <button>Back</button>
          </Link>

          <br />
          <Link to="/the-story-tradition">
            <button>Next</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
