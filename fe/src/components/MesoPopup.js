import React, { useState,useRef } from 'react';
import "./MesoPopup.css"
import { RiArrowGoBackFill } from "react-icons/ri";
import axios from 'axios';


function MesoPopup(props) {

  const [formData, setFormData] = useState({
    mesoName: '',
    mesoNotes: '',
    mesoLength: '',

  });
  const url = 'http://localhost:5000/submit'

  let sendData = () => {
    axios.post(url, formData)
       .then(res => console.log('Data send'))
       .catch(err => console.log(err.data))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    sendData();
    // Clear form data
    setFormData({
      mesoName: '',
      mesoNotes: '',
      mesoLength: '',
    });
  };


  return (props.trigger) ? (
    <div className='popup'>
        <div className='insidepop'>
            <button className='close-btn' onClick={ () => props.setTrigger(false)}>
            <RiArrowGoBackFill />
            </button>
            &nbsp;
            &nbsp;
            <h1 className='header'>Create New Meso</h1>
            <form className='form' onSubmit={handleSubmit}>
            <h1 className='header'>Mesocycle Number</h1>
            <div className='inputs'>
            <input type="text" name="mesoName" value={formData.mesoName} onChange={handleChange} placeholder='MesoCycle#'></input>
            <input type="text" name="mesoNotes" value={formData.mesoNotes} onChange={handleChange} placeholder='MesoNotes#'></input>
            <input type="text" name="mesoLength" value={formData.mesoLength} onChange={handleChange} placeholder='MesoLength'></input>            
            
            </div>
            <div className='submitbuttons'>
            <button type='submit' id="btn">Click to Add</button>
            </div>

            </form>

            {props.children}
        </div>
    </div>



  ) : "";
}


export default MesoPopup
