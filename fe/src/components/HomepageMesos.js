import React from "react";
import MockData from "../assets/data/MockData.json"
import './HomeMesoTable.css';


function HomepageMesos(){
    return (
        <>
        <div className="HomePageMesos">
        <table className="MesoTable">
      <thead>
        <tr>
          <th>Mesocycle Number</th>
          <th>Duration</th>
          <th>Status</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {MockData.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.duration}</td>
            <td>{item.status}</td>
            <td>{item.notes || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>

        </div>
        </>
    )

}
export default HomepageMesos
