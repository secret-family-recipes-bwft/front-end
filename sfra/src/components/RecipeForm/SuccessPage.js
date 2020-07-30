import React from "react";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <div>
      <div>SUCCESS IMAGE</div>
      <h1>Success!</h1>
      <h4>Your recipe has been created!</h4>
      <br />
      <Link to="/recipe/:id">
        <button>View Recipe</button>
      </Link>
      <br />
      <Link to="/dash">
        <p>Maybe Later</p>
      </Link>
    </div>
  );
}
