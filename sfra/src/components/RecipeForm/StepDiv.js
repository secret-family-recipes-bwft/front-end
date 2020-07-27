import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function StepDiv({ step, title, overview }) {
  return (
    <div>
      <p>{step}</p>
      <h3>{title}</h3>
      <h5>{overview}</h5>
      <div
        style={{ border: ".5px solid black", width: "60vw" }}
        className="break-div"
      />
    </div>
  );
}
