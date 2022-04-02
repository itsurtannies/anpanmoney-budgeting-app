import React from "react";
import { Routes ,Route, BrowserRouter } from 'react-router-dom';

import Home from './components/pages/Home'
import Profile from "./components/pages/Profile";
import Dashboard from "./components/pages/Dashboard";
import Settings from "./components/pages/Settings";
import Login from './components/Login'
import Register from './components/Register'

function App(){
    const[registerEmail, setRegisterEmail] = useState(" ");
    const[registerPassword, setRegisterPassword] = useState(" ");
    const[loginEmail, setLoginEmail] = useState(" ");
    const[loginPassword, setLoginPassword] = useState(" ");

    const register = async() => {

    }
    const login = async() => {
    
    }
    
    const logout = async() => {
    
    }
    
    const App = () => {
        return(
            
        
            <div className="app-main">
                <Routes>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/dashboard' element={<Dashboard/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/settings' element={<Settings/>} />
                </Routes>
            </div>
        
        
        )
}
}

export default App