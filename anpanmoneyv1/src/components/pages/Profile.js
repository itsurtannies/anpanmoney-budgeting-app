import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Profile() {
  return (
    <div>
      <Header />
      <div className="debody">
        <div id="side">
          <Sidebar />
        </div>

        <div id="sec">PROFILE</div>
      </div>
    </div>
  );
}

export default Profile;
