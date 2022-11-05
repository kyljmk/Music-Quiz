import React from "react";
import { useNavigate } from "react-router-dom";
import useInfo from "../hooks/useInfo";
import "../styles/Login.css";
import { TextField } from "@mui/material";

function Login() {
  const { name, setName, email, setEmail } = useInfo();
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    navigate("/quiz");
    console.log(name);
    console.log(email);
  };

  return (
    <div className="login">
      <h1 className="login--title">
        music
        <br />
        trivia
        <br />
        quiz.
      </h1>

      <form className="login--form" onSubmit={handleClick}>
        <input
          placeholder="Name"
          label="Name"
          className="login--nameInput"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          size="small"
          autoComplete="off"
        />
        <input
          label="Email"
          className="login--emailInput"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          autoComplete="off"
          placeholder="Email"
        />
        <button className="login--button">start the quiz.</button>
      </form>
    </div>
  );
}

export default Login;
