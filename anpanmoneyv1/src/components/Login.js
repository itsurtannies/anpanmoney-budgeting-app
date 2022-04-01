import React from "react";
import { Button } from "./Button";
import img1 from "./images/logo.png";
import "./pages/pagesComponents/inputBox.css";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./Login.css";
import Register from "./Register";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <center>
        <img src={img1} alt="" width="220" length="320" />
      </center>
      <hr width="60%"></hr>
      <center>
        <h1>L O G I N</h1>
      </center>
      <center>
        <label class="custom-field one">
          <input type="text" required />
          <span class="placeholder">Enter Email</span>
          <br></br>
          <br></br>
        </label>
      </center>
      <center>
        <label class="custom-field one">
          <input type="text" required />
          <span class="placeholder">Enter Password</span>
        </label>
      </center>
      <br></br>
      <center>
        <Button
          onClick={() => navigate("/home")}
          buttonStyle="btn--danger--solid"
        >
          Sign in
        </Button>
      </center>
      <br></br>
      <center>
        <div>
          don't have an account?{" "}
          <Link to="/register" color="green">
            Register
          </Link>
        </div>
      </center>
    </div>
  );
};
export default Login;
