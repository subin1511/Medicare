import React from 'react'
import Sidebar from '../../components/Sidebar';
import './myappoint.css'

const MyAppoint = () => {
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
         <tr>
            <td>Dr John</td>
            <td>Orthology</td>
            <td>28/02/2024</td>
            <td>2pm</td>
            <td>12</td>
         </tr>
         <tr>
            <td>Dr Rekha</td>
            <td>Gynacologist</td>
            <td>3/03/2024</td>
            <td>2pm</td>
            <td>10</td>
         </tr>
        </tbody>
      </table>
      </Sidebar>
    </div>
  )
}

export default MyAppoint;