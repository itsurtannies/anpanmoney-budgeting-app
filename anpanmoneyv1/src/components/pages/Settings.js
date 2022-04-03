import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Button } from "./pagesComponents/Button";
import "./Settings.css";

function Settings() {
  return (
    <div>
      <Header />

      <div className="debody">
        <div id="side">
          <Sidebar />
        </div>

        <div id="sec">
          <h1>Settings</h1>
          <div className="containerS">
            <h3>USER INFORMATION</h3>
            <div className="containerSs">
              <div id="row">
                email
                <input id="inputS" type={"text"} />
              </div>

              <div id="row">
                username
                <input id="inputS" type={"text"} />
              </div>
              <div id="button">
                <Button
                  buttonStyle="btn--success--solid"
                  buttonSize={"btn--medium"}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
          <div className="containerS">
            <h3>USER INFORMATION</h3>
            <div className="containerSs">
              <div id="row">
                old password
                <input id="inputS" type={"password"} />
              </div>

              <div id="row">
                new password
                <input id="inputS" type={"password"} />
              </div>
              <div id="button">
                <Button
                  buttonStyle="btn--success--solid"
                  buttonSize={"btn--medium"}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
          <div className="containerS">
            <h3>USER INFORMATION</h3>
            <div className="containerSs">
              <div id="row">
                Occupation
                <input id="inputS" type={"text"} />
              </div>

              <div id="row">
                Budget/Allowance
                <input id="inputS" type={"text"} />
              </div>

              <div id="row">
                Occupation
                <input id="inputS" type={"text"} />
              </div>
              <div id="button">
                
                <Button
                  buttonStyle="btn--success--solid"
                  buttonSize={"btn--medium"}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
