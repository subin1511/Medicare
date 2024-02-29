import React from 'react'
import Sidebar from '../../components/Sidebar';
import './bookAppoint.css'

const BookAppoint = () => {
  return (
    
    <div>
      <Sidebar>
      <h1>Doctors List</h1>
      <table className='t1'>
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Speciality</th>
            <th>Location</th>
            <th>Rating</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
         <tr>
            <td>Dr John</td>
            <td>Orthology</td>
            <td>Kadambazhipuram</td>
            <td>4/5</td>
            <td>200</td>
         </tr>
         <tr>
            <td>Dr Rekha</td>
            <td>Gynacologist</td>
            <td>Kadambazhipuram</td>
            <td>4.5/5</td>
            <td>200</td>
         </tr>
         <tr>
            <td>Dr Ramya</td>
            <td>Neurologist</td>
            <td>Sreekrishnapuram</td>
            <td>4/5</td>
            <td>150</td>
         </tr>
        </tbody>
      </table>
      </Sidebar>
    </div>
  )
}

export default BookAppoint