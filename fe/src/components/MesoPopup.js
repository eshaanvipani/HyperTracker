import React, { useState,useRef } from 'react';
import "./MesoPopup.css"
import { RiArrowGoBackFill } from "react-icons/ri";
import axios  from 'axios';


function MesoPopup(props) {
  const url = "http://localhost:5016/MesoCycleAPI"

  const [formData, setFormData] = useState({
    mesoName: '',
    mesoNotes: '',
  });
  const mesoData = useRef();

  const handleClick=()=>{
    console.log(mesoData)
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

    // Make the POST request here
    axios
      .post(url, {
        mesoName: formData.mesoName,
        mesoNotes: formData.mesoNotes,
      })
      .then((res) => {
        console.log('Response:', res.data);
      })
      .catch((error) => {
        console.error('Error:', error);
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
            <input type="text" name="mesoName" value={formData.mesoName} onChange={handleChange} placeholder='MesoCycle#'></input>


            <input ref={mesoData} type="text" name="mesoNotes" value={formData.mesoNotes} onChange={handleChange} placeholder='MesoNotes#'></input>            
            <button type='submit' id="btn">Click to Add</button>

            </form>

            {props.children}
        </div>
    </div>



  ) : "";
}


export default MesoPopup
