import React,{ useState } from 'react';
import Sidebar from '../../components/Sidebar';
import './myAppoint.css'

const MyAppoint = () => {
  const data = [
    { id: 1, name: 'Dr.Smith', speciality:'Orthology', place:'thotra',rating:'4/5',cost:'200' },
 
  ];

  return (
    
    <div>
      <Sidebar>
      <h1>My Appointment</h1>
      <table className='t2'>
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Speciality</th>
            <th>Date</th>
            <th>Time</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
        { data.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.speciality}</td>
            <td>{row.place}</td>
            <td>{row.rating}</td>
            <td>{row.cost}</td>

         </tr>
        ))}      
        </tbody>
      </table>
      </Sidebar>
    </div>
  )
}

export default MyAppoint;