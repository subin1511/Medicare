import React from 'react'
import Sidebar from '../../components/Sidebar';
import './patientlist.css'
const Patientlist = () => {
    return (
      <div>
        <Sidebar>
          <div class="totlPatintContainer">
        <div class="totlPatintContainer1">
    <div class="text1">Total Patients</div>
    <div class="num1">3</div>  
        </div> 
        <div class="totlPatintContainer2">
    <div class="text2">Patient Remaining</div>
    <div class="num2">3</div>  
        </div>
        </div>
        <table className='t1'>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Token</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
         <tr>
            <td>Rohan</td>
            <td>5</td>
            <td>
            <button type="button">Consult</button>
            </td>
         </tr>
         <tr>
            <td>Rohit</td>
            <td>6</td>
            <td>
            <button type="button">Consult</button>
            </td>
         </tr>
         <tr>
            <td>Ramya</td>
            <td>8</td>
            <td>
            <button type="button">Consult</button>
            </td>
         </tr>
        </tbody>
      </table>
      </Sidebar>
    </div>
  )
}

export default Patientlist;