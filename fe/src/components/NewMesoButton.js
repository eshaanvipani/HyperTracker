import React from 'react'
import * as FaIcons from "react-icons/fa";
import"./NewMesoButton.css"
import MesoPopup from './MesoPopup';

import { useState } from 'react';

function NewMesoButton() {

    const [mesoPopup,setmesoPopup] = useState(false)


    return(
        <>
        <div className='MesoB'>

            <button className='MButton' onClick={() => setmesoPopup(true)}>
            <FaIcons.FaPlus/>
            &nbsp; Add Meso
            </button>
            <MesoPopup trigger={mesoPopup}>
                <h3>mypop</h3>
            </MesoPopup>
            
        </div>
        </>

    )
}
export default NewMesoButton;
