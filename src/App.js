import React from 'react';
import './App.css';
import Login from './pages/login/login.jsx';
import Home from './pages/dashbored/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HealthRecord from './pages/dashbored/healthRecord.jsx';
import BookAppoint from './pages/dashbored/bookAppoint.jsx';
import MyAppoint from './pages/dashbored/myappoint.jsx';
import Patientlist from './pages/dashbored/patientlist.jsx';





const router= createBrowserRouter([
  {
    path:'/',
    element:<div><Login/></div>

  },


{
  path:"/Home" ,
  element:<div> <Home /></div>
},
{
  path:"/HealthRecord" ,
  element:<div> <HealthRecord /></div>
},
{
  path:"/BookAppoint" ,
  element:<div> <BookAppoint /></div>
},
{
  path:"/MyAppoint" ,
  element:<div> <MyAppoint /></div>
},
{
  path:"/Patientlist" ,
  element:<div> <Patientlist /></div>
}

])
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
