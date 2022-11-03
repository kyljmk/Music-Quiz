import React from "react";
import { useNavigate } from "react-router-dom";
import useInfo from "../hooks/useInfo";

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
    <div>
      <h1>Login</h1>

      <form onSubmit={handleClick}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button>To the quiz</button>
      </form>
    </div>
  );
}

export default Login;
