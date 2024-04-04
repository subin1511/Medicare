import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Sidebar from '../../components/Sidebar';
import './bookAppoint.css'




const BookAppoint = () => {
  
  const data = [
    { id: 1, name: 'Dr.Smith', speciality:'Orthology', place:'thotra',rating:'4/5',cost:'200' },
    { id: 2, name: 'Dr.Swathi', speciality:'Orthology', place:'thotra',rating:'4/5',cost:'200' },
 
  ];
  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate();
  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    const pathToDetailsPage = `/docBookProfile.jsx}`; // Define path template
    navigate(pathToDetailsPage); 
  };
  return (
    
    <div>
      <Sidebar>
      <h1>Doctors List</h1>
      <table className='t1'>
        <thead>
          <tr className='table-row'>
            <th>Doctor Name</th>
            <th>Speciality</th>
            <th>Location</th>
            <th>Rating</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
        { data.map((row) => (
          <tr key={row.id} onClick={() => handleRowClick(row)}>
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


export default BookAppoint