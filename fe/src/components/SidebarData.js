import React from 'react'
import * as FaIcons from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { GoSmiley } from "react-icons/go";




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
        icon : <GoSmiley />,
        cName: 'nav-text'
    }
]