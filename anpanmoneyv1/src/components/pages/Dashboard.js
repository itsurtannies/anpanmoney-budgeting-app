import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function Dashboard() {
    return(
        <div>
            <Header/>
            
            <div className="debody">
                <div id="side"><Sidebar/></div>
                
                <div id="sec">
                    Dashboard
                </div>
            
            </div>
        </div>

        
    )
}

export default Dashboard