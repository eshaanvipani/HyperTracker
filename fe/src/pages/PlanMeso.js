import React, { useState } from 'react';
import logo from '../assets/images/EVLogo.jpg'
import DesignNewMesoButton from '../components/DesignNewMesoButton'
import MockData from "../assets/data/MockData.json"
import ExerciseOptions from '../assets/data/ExcerciseOptions';



function PlanMeso() {

const [columns, setColumns] = useState([
    { id: "Mon", exercises: [] },
    { id: "Tues", exercises: [] },
    { id: "Wed", exercises: [] },
    { id: "Thurs", exercises: [] },
    { id: "Fri", exercises: [] },
    { id: "Sat", exercises: [] },
    { id: "Sun", exercises: [] },

  ]);


  
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const addExercise = (columnId) => {
    // Update state to add an exercise to the correct column
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? { ...column, exercises: [...column.exercises, `Exercise ${column.exercises.length + 1}`] }
          : column
      )
    );
  };

  const removeExercise = (columnId) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.id === columnId && column.exercises.length > 0) {
          const updatedExercises = [...column.exercises]; 
          updatedExercises.pop(); 
          return { ...column, exercises: updatedExercises };
        }
        return column; 
      })
    );
  };

  
  return (
    <table border="1" style={{ width: '100%', textAlign: 'center' }}>
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.id}>
             {column.id}
            <button onClick={() => addExercise(column.id)}>Add Exercise</button>
            <button onClick={() => removeExercise(column.id)}>Remove Exercise</button>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        {columns.map((column) => (
          <td key={column.id}>
            <ul>
              {column.exercises.map((exercise, index) => (
      <select value={selectedOption} onChange={handleChange}>
      <option value="">{exercise}</option>
      {ExerciseOptions.map((option) => (
        <option key={option.value[0]} value={option.value[0]}>
          {option.label}
        </option>
      ))}
    </select>
              ))}
            </ul>
          </td>
        ))}
      </tr>
    </tbody>
  </table>
  )
}

export default PlanMeso
