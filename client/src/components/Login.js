import React, { useState } from "react";
import QuoteDisplay from "./QuoteDisplay";
import axios from "axios";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/admin/login",
        { username, password }
      );
      localStorage.setItem("token", response.data.token);
      onLogin(true);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials");
    }
  };

  return (
    
    <form onSubmit={handleLogin}>
      <h4>Admin Login</h4>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br></br>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
