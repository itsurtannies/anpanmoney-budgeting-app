import React from "react";
import "./homeEditPopup.css";
import CloseIcon from "@mui/icons-material/Close";

function homeEditPopup(props) {
  return props.trigger ? (
    <div className="popupp">
      <CloseIcon />
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default homeEditPopup;
