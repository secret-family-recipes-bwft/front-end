import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input";

export default function TheStoryTradition() {
  const defaultState = {
    recipeOriginator: "",
    originatorImageURL: "",
    tradtion: "",
    story: "",
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
      <h1>Share the story </h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Who originated this story? "
          type="text"
          name="recipeOriginator"
          placeholder="Grandma Pearl"
          value={formState.recipeOriginator}
          onChange={handleChange}
        />
        <Input
          label="When does your family usually make this recipe?"
          type="text"
          name="originatorImageURL"
          value={formState.originatorImageURL}
          onChange={handleChange}
          placeholder="Image of Grandma Pearl"
        />{" "}
        <br />
        <br />
        <label htmlFor="tradition">
          When does your family usually make this recipe?
          <br />
          <textarea
            name="tradition"
            value={formState.tradition}
            onChange={handleChange}
            cols="30"
            rows="10"
            placeholder="The first night of Hanukkah..."
          />
        </label>
        <br />
        <br />
        <label htmlFor="story">
          Is there a story around this recipe or memory you’d like to share of
          when your family would eat this recipe?
          <br />
          <textarea
            name="story"
            value={formState.story}
            onChange={handleChange}
            cols="30"
            rows="10"
            placeholder="My favorite memory was when the whole family would help prepare this meal, while we would listen to  Billy Joel full blast ..."
          />
        </label>
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
          <Link to="/start-screen-2">
            <button>Next</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
