import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input";

export default function Ingredients() {
  const defaultState = {
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    ingredient6: "",
    ingredient7: "",
    ingredient8: "",
    ingredient9: "",
    ingredient10: "",
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
      <h1>What are the ingredients?</h1>
      <form onSubmit={handleSubmit}>
        <Input
          // label="What’s the name of your recipe?"
          type="text"
          name="ingredient1"
          placeholder="Ingredient 1"
          value={formState.ingredient1}
          onChange={handleChange}
        />
        <Input
          // label="What’s the name of your recipe?"
          type="text"
          name="ingredient2"
          placeholder="Ingredient 2"
          value={formState.ingredient2}
          onChange={handleChange}
        />
        <Input
          // label="What’s the name of your recipe?"
          type="text"
          name="ingredient3"
          placeholder="Ingredient 3"
          value={formState.ingredient3}
          onChange={handleChange}
        />
        <Input
          // label="What’s the name of your recipe?"
          type="text"
          name="ingredient4"
          placeholder="Ingredient 4"
          value={formState.ingredient4}
          onChange={handleChange}
        />

        <Input
          // label="What’s the name of your recipe?"
          type="text"
          name="ingredient5"
          placeholder="Ingredient 5"
          value={formState.ingredient5}
          onChange={handleChange}
        />
        <Input
          // label="What’s the name of your recipe?"
          type="text"
          name="ingredient6"
          placeholder="Ingredient 6"
          value={formState.ingredient6}
          onChange={handleChange}
        />
        <Input
          // label="What’s the name of your recipe?"
          type="text"
          name="ingredient7"
          placeholder="Ingredient 7"
          value={formState.ingredient7}
          onChange={handleChange}
        />
        <Input
          // label="What’s the name of your recipe?"
          type="text"
          name="ingredient8"
          placeholder="Ingredient 8"
          value={formState.ingredient8}
          onChange={handleChange}
        />
        <Input
          // label="What’s the name of your recipe?"
          type="text"
          name="ingredient9"
          placeholder="Ingredient 9"
          value={formState.ingredient9}
          onChange={handleChange}
        />
        <Input
          // label="What’s the name of your recipe?"
          type="text"
          name="ingredient10"
          placeholder="Ingredient 10"
          value={formState.ingredient10}
          onChange={handleChange}
        />

        <button>+Add Ingredient</button>

        <br />
        <br />
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
          <Link to="/the-directions">
            <button>Next</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
