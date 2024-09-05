import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { PiLegoSmileyBold } from "react-icons/pi";




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
        icon : <PiLegoSmileyBold/>,
        cName: 'nav-text'
    }
]