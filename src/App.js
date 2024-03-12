import React from 'react';
import './App.css';
import Login from './pages/login/login.jsx';
import Home from './pages/dashbored/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HealthRecord from './pages/dashbored/healthRecord.jsx';
import MyApointment from './pages/dashbored/MyAppointment.jsx';
import IotMonitoring from './pages/dashbored/IotMonitoring.jsx';
import Profile from './pages/dashbored/Profile.jsx';
import Logout from './pages/dashbored/Logout.jsx';
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
  path:"/bookAppoint" ,
  element:<div> <BookAppoint/></div>
},
{
  path:"/myAppoint" ,
  element:<div> <MyAppoint/></div>
},
{
  path:"/IotMonitoring" ,
  element:<div> <IotMonitoring/></div>
},
{
  path:"/profile" ,
  element:<div> <Profile/></div>
},
{
  path:"/myappoint" ,
  element:<div> <patientlist/></div>
},
{
  path:"/logOut" ,
  element:<div> <Logout/></div>
},{
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
