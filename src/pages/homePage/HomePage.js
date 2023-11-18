import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <img className="logo" src="../../images/leaf.png" alt="leafLogo" />

      <p
        style={{
          color: "#36A546CC",
          font: "normal normal normal 16px/21px Mulish",
          letterSpacing: "0.02px",
          opacity: 1,
        }}
      >
        We are Electric
      </p>
      <form className="container" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        <a href="/" style={{ color: "#36A546" }}>
          Forgot Password?
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
