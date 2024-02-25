import React from 'react';
import './App.css';
import Login from './pages/login/login.jsx';
import Home from './pages/dashbored/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HealthRecord from './pages/dashbored/healthRecord.jsx';
import BookAppoint from './pages/dashbored/BookAppoint.jsx';
import MyApointment from './pages/dashbored/MyAppointment.jsx';
import IotMonitoring from './pages/dashbored/IotMonitoring.jsx';
import Profile from './pages/dashbored/Profile.jsx';
import Logout from './pages/dashbored/Logout.jsx';
import PatientRegistration from './pages/Register/PatientRegister.jsx';

const router= createBrowserRouter([
  {
    path:'/',
    element:<div><Login/></div>

  },
{
  path:"/Register",
  element:<div><PatientRegistration /></div>
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
  element:<div> <MyApointment/></div>
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
  path:"/logOut" ,
  element:<div> <Logout/></div>
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
