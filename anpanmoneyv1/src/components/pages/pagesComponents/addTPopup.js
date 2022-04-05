import React from "react";
import "./addTPopup.css";
import "./inputBox.css";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { getAccordionDetailsUtilityClass, getTextFieldUtilityClass } from "@mui/material";


const remarkData = [
{category:"savings"},
{category:"needs"},
{category:"wants"}
]

const needsData = [
  {option: "a"},
  {option: "b"},
  {option: "c"},
  {option: "d"}
]
const wantsData = [
  {option: "a"},
  {option: "b"},
  {option: "c"},
  {option: "d"}
]
const savingsData = [
  {option: "a"},
  {option: "b"},
  {option: "c"},
  {option: "d"}
]

var Selection;
function AddTPopup(props) {
  const[category,setCategory] = useState(" ")

function getValue(val){
  
  setCategory(val.target.value)
  console.log(category)
}

  const[date,setDate] = useState()


  return props.trigger ? (
    <div className="popup">
      <div className="wholecontainer">
        <div className="addcontainer">
          <form>
            <center>
              <h2 id="title">Log Transaction</h2>
            </center>

            <input className="tBox" type="date" onChange={e=>setDate(e.target.value)}></input>
            <select className="tBoxs" onChange={getValue}>
              <option className="placeholder">---category---</option>
              {remarkData.map(x =>{
                return(<option>{x.category}</option>)
              })}
            </select>
            <select className="tBoxs">
              <option className="placeholder">---remarks---</option>
              {category === "savings" && savingsData.map(x =>{
                return(<option>{x.option}</option>)
              })}
              {category === "needs" && needsData.map(x =>{
                return(<option>{x.option}</option>)
              })}
              {category === "wants" && wantsData.map(x =>{
                return(<option>{x.option}</option>)
              })}
            </select>
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

export default AddTPopup;
