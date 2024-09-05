import React from 'react'
import "./MesoPopup.css"

function MesoPopup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='insidepop'>
            <button className='close-btn'>
                close
            </button>
            {props.children}
        </div>

    </div>

  ) : "";
}

export default MesoPopup
