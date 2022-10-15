import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>Something went wrong!!!</p>
        <span>
          Wanna sign in? <Link to="/login">Login Here</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
