import React, { useState } from "react";
import StepDiv from "./StepDiv";
import { Link } from "react-router-dom";

export default function StartScreen() {
  return (
    <div>
      <header>
        <ul>
          <p>Secret Family Recipe App</p>
          <p>Step 1: What’s the story? </p>
        </ul>
      </header>
      <div>
        <StepDiv
          step="STEP 1"
          title="What's the story"
          overview="Name, Category, Originator, Recipe Story"
        />
        <StepDiv
          step="STEP 2"
          title="What can you expect from this recipe? "
          overview="Prep Time, Allergies, Serving Size"
        />
        <StepDiv
          step="STEP 3"
          title="How do you make this recipe?"
          overview="Ingredients, Directions"
        />
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
        <button>Back</button>
        <br />
        <Link to="/the-story">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}
