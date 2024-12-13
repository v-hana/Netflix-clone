import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "password123") {
      setIsAuthenticated(true); 
      localStorage.setItem("isAuthenticated", "true"); 
      navigate("/home"); 
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: "block", margin: "10px 0", padding: "10px", width: "250px" }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: "block", margin: "10px 0", padding: "10px", width: "250px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
