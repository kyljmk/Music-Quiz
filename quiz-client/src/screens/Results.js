import React from "react";
import { useNavigate } from "react-router-dom";
import useInfo from "../hooks/useInfo";

function Results() {
  const { score, setName, setEmail, setQuestionDisplayed, setScore } =
    useInfo();

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
    setEmail("");
    setName("");
    setQuestionDisplayed(1);
    setScore(0);
  };

  return (
    <div>
      <h1>Results</h1>
      <h2>You got {score} questions right!</h2>
      <button onClick={handleHome}>Home</button>
    </div>
  );
}

export default Results;
