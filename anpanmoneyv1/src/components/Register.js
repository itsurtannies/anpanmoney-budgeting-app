import React from "react";
import img1 from "./images/logo.png";
import { Button } from "./Button";
import "./pages/pagesComponents/inputBox.css";
import { useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="register">
      <center>
        <img src={img1} alt="" width="220" length="320" />
      </center>
      <hr width="60%"></hr>
      <center>
        <h1>R E G I S T E R</h1>
      </center>

      <center>
        <label class="custom-field one">
          <input type="text" onChange= {(event)=> {setRegisterEmail(event.target.value)}} />
          <span class="placeholder">Enter Email</span>
          <br></br>
          <br></br>
        </label>
      </center>
      <center>
        <label class="custom-field one">
          <input type="text" onChange= {(event)=> {setRegisterEmail(event.target.value)}}  />
          <span class="placeholder">Enter Username</span> &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          <input type="text" onChange= {(event)=> {setRegisterEmail(event.target.value)}} />
          <span class="placeholder1">Enter Password</span>
        </label>
      </center>
      <br></br>
      <center>
        <label class="custom-field one">
          <input type="text" required />
          <span class="placeholder">Enter Occupation</span> &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          <input type="text" required />
          <span class="placeholder1">Enter Purchase Frequency</span>
        </label>
      </center>
      <br></br>
      <center>
        <label class="custom-field one">
          <input type="text" required />
          <span class="placeholder">Monthly Budget</span> &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          <input type="text" required />
          <span class="placeholder1">Phone Number</span>
        </label>
      </center>
      <br></br>
      <center>
        <Button
          onClick={() => navigate("/home")}
          buttonStyle="btn--danger--solid"
        >
          Register
        </Button>
      </center>
    </div>
  );
};

export default Register;
