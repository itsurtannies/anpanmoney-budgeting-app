import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
export const SidebarData = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/home"
    },
    {
        title:"Profile",
        icon:<AccountBoxIcon/>,
        link:"/profile"
    },
    {
        title:"Dashboard",
        icon:<DashboardIcon/>,
        link:"/dashboard"
    },
    {
        title:"Settings",
        icon:<SettingsIcon/>,
        link:"/settings"
    },


]