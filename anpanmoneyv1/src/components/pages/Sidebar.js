import React from 'react'
import './Sidebar.css';
import {SidebarData} from './SidebarData'
function Sidebar() {
  return (
    <div className="Sidebar">
        <br></br>
        <ul className='SidebarList'>
            {SidebarData.map((val,key) => {
                return(
                    <li key ={key} className='row' onClick = {() =>{window.location.pathname = val.link}}>
                        {" "}
                        <div id='icon'>
                            {val.icon}
                        </div>{" "}
                        <div id='title'>
                            {val.title}
                        </div>
                    </li>
                )
            })}
        </ul>
        <hr></hr>
        <div className='priv'>
            Privacy Policy | Terms and Conditions The Anpanmoney Team (C) 2021
        </div>
    </div>
  )
}
export default Sidebar