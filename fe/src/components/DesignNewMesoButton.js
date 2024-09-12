import React from 'react'
import * as FaIcons from "react-icons/fa";
import"./DesignNewMesoButton.css"
import MesoPopup from './MesoPopup';

import { useState } from 'react';

function DesignNewMesoButton() {

    const [mesoPopup,setmesoPopup] = useState(false)


    return(
        <>
        <div className='MesoB'>

            <button className='DMButton' onClick={() => setmesoPopup(true)}>
            <FaIcons.FaPlus/>
            &nbsp; Add Meso
            </button>
            <MesoPopup trigger={mesoPopup} setTrigger={setmesoPopup}>
            </MesoPopup>
            
        </div>
        </>

    )
}
export default DesignNewMesoButton;
