import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import auth from "../../auth/auth";
import "./Login.css";

export default function Login(props) {
  let navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    auth.onAuthentication();
    auth.saveToken(email);
    navigate("/");
  }
  return (
    <div className="login-wrapper">
      <h1>Login to evaluate the course</h1>
      <form onSubmit={handleSubmit}>
        <label>Email Address:</label>
        <br />
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label> Password:</label>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
