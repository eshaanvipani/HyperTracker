import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { CgGym } from "react-icons/cg";




export const SidebarData = [
    {
        title : "Current Workout",
        path : '/',
        icon : <CgGym/>,
        cName: 'nav-text'
    },
    {
        title : "Mesocycles",
        path : '/mesos',
        icon : <FaIcons.FaHome/>,
        cName: 'nav-text'
    },
    {
        title : "Plan a new Mesocycle",
        path : '/plan-meso',
        icon : <FaIcons.FaHome/>,
        cName: 'nav-text'
    }
]