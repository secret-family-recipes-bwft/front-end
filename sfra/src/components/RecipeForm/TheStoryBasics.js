import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input";

export default function TheStoryBasics() {
  const defaultState = {
    title: "",
    picture_url: "",
    category: "",
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
          name="title"
          placeholder="Recipe Name"
          value={formState.title}
          onChange={handleChange}
        />
        <Input
          label="Upload an image"
          type="text"
          name="picture_url"
          value={formState.picture_url}
          onChange={handleChange}
          placeholder="Image of recipe"
        />{" "}
        <label htmlFor="category">
          What type of recipe is this?
          <br />
          <select
            name="category"
            value={formState.category}
            onChange={handleChange}
          >
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
