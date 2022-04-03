import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Home.css";
import AddIcon from "@mui/icons-material/Add";
import Popup from "./pagesComponents/addTPopup";
import Popupe from "./pagesComponents/homeEditPopup";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function colorSelect(categ) {
  if (categ === "savings") {
    return "green";
  } else if (categ === "needs") {
    return "purple";
  } else if (categ === "wants") {
    return "red";
  }
}

var listData = [
  {
    category: "savings",
    remark: "BDO Savings",
    Amount: 2000,
  },
  {
    category: "needs",
    remark: "utility bills",
    Amount: 5000,
  },
  {
    category: "wants",
    remark: "clothes",
    Amount: 1500,
  },
  {
    category: "wants",
    remark: "clothes",
    Amount: 1500,
  },
  {
    category: "needs",
    remark: "utility bills",
    Amount: 5000,
  },
];

const Home = () => {
  var rBalance = 5000;
  var rWants = 2000;
  var rNeeds = 1000;
  var rSavings = 3000;
  var name = "John";
  var monthlyBudget = 30000;
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const toggle = () => {
    setButtonPopup1(!buttonPopup1);
  };
  return (
    <div>
      <Header />
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
      <div className="debody">
        <div id="side">
          <Sidebar />
        </div>

        <div id="sec">
          <div className="container">
            <h1>Hi {name}</h1>
            This is your current budget status..
            <br></br>
            <br></br>
            <div id="bStatusContainer">
              <div id="bStatus">
                <div id="rOutput">
                  Remaining Balance
                  <div id="rInfo">{rBalance}</div>
                </div>
                <div id="rOutput">
                  Budget left for needs
                  <div id="rInfoN">{rNeeds}</div>
                </div>
                <div id="rOutput">
                  Budget left for wants
                  <div id="rInfoW">{rWants}</div>
                </div>
                <div id="rOutput">
                  Budget left for savings
                  <div id="rInfoS">{rSavings}</div>
                </div>
              </div>
              <center>Monthly Budget: Php {monthlyBudget}</center>
            </div>
            <br></br>
            <div>
              Your Transactions Today
              <br></br>
            </div>
            <div className="TransactionBox">
              <div id="tBox">
                <div className="tBoxList">
                  <div className="column">
                    <div id="c1">category</div>
                    <div id="c2">remarks</div>
                    <div id="c3">amount</div>
                  </div>
                  {listData.map((val, key) => {
                    return (
                      <li key={key} className="row">
                        {" "}
                        <div id={`category${colorSelect(val.category)}`}>
                          {val.category}
                        </div>
                        <div id={`remark${colorSelect(val.category)}`}>
                          {val.remark}
                        </div>
                        <div id={`amount${colorSelect(val.category)}`}>
                          <div className="deleteFlex">
                            <div id="lastcol1">{val.Amount}</div>{" "}
                            <div id="lastcol2">
                              <Popupe
                                trigger={buttonPopup1}
                                setTrigger={setButtonPopup1}
                              ></Popupe>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </div>
              </div>
              <div id="addIcon" onClick={() => setButtonPopup(true)}>
                <AddIcon />
              </div>

              <div id="closeIcon" onClick={toggle}>
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
