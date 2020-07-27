import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCards({ category, title, picture_url }) {
  return (
    <div>
      <div>
        <h3>{category}</h3>
        <p>View More</p>
      </div>
      <div>
        <img src={picture_url} alt={title} />
        <h5>{title}</h5>
      </div>
    </div>
  );
}
