import React from "react";
import "./addTPopup.css";
import "./inputBox.css";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
function addTPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="wholecontainer">
        <div className="addcontainer">
          <form>
            <center>
              <h2 id="title">Log Transaction</h2>
            </center>

            <input className="tBox" type="text" placeholder="Date"></input>
            <input className="tBox" type="text" placeholder="Category"></input>
            <input className="tBox" type="text" placeholder="Remark"></input>
            <input className="tBox" type="text" placeholder="Price"></input>
          </form>
          <div className="addIcon">
            <center>
              <AddIcon />
              Add Transaction
            </center>
          </div>
          <div className="closeIcon" onClick={() => props.setTrigger(false)}>
            <center>
              <CloseIcon />
              Close
            </center>
          </div>
        </div>
      </div>

      {props.children}
    </div>
  ) : (
    " "
  );
}

export default addTPopup;
