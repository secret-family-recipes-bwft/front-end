import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input";

export default function Expectations() {
  const defaultState = {
    prepTime: "",
    servingSize: "",
    recipeType: "",
    none: false,
    shellFish: false,
    nuts: false,
    soy: false,
    milk: false,
    wheat: false,
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
      <h1>Set the expectations</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="How long does this recipe take to make?"
          type="text"
          name="prepTime"
          placeholder="90 minutes"
          value={formState.prepTime}
          onChange={handleChange}
        />
        <label htmlFor="servingSize">
          What type of recipe is this?
          <br />
          <select
            name="servingSize"
            value={formState.servingSize}
            onChange={handleChange}
          >
            <option value="1-3people">1-3 people</option>
            <option value="3-5people">3-5 people</option>
            <option value="5-7people">5-7 people</option>
            <option value="7+people">7+ people</option>
          </select>
        </label>
        <br />
        <br />
        <div className="allergy-wrapper">
          <label htmlFor="">Give people a heads up on common allergies</label>
          <br />
          <br />
          <label htmlFor="none">
            None
            <input
              type="checkbox"
              name="none"
              id="none"
              value={formState.none}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="shellFish">
            Shell Fish
            <input
              type="checkbox"
              name="shellFish"
              id="shellFish"
              value={formState.shellFish}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="nuts">
            Nuts
            <input
              type="checkbox"
              name="nuts"
              id="nuts"
              value={formState.nuts}
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="soy">
            Soy
            <input
              type="checkbox"
              name="soy"
              id="soy"
              value={formState.soy}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="milk">
            Milk
            <input
              type="checkbox"
              name="milk"
              id="milk"
              value={formState.milk}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="wheat">
            Wheat
            <input
              type="checkbox"
              name="wheat"
              id="wheat"
              value={formState.wheat}
              onChange={handleChange}
            />
          </label>
        </div>
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
          <Link to="/start-screen-3">
            <button>Next</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
