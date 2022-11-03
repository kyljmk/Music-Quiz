import React from "react";
import { useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/quiz");
  };

  return (
    <div>
      <h1>Results</h1>
      <button onClick={handleReturn}>Go back</button>
    </div>
  );
}

export default Results;
