import React from 'react';
import './App.css';
import Login from './pages/login/login.jsx';
import Home from './pages/dashboard/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IotMonitoring from './pages/dashboard/IotMonitoring.jsx';
import HealthRecord from './pages/dashbored/healthRecord.jsx';
import BookAppoint from './pages/dashbored/bookAppoint.jsx';
import MyApointment from './pages/dashbored/MyAppointment.jsx';
import Profile from './pages/dashbored/Profile.jsx';
import Logout from './pages/dashbored/Logout.jsx';
import PatientRegistration from './pages/Register/PatientRegister.jsx';
import PatientConsult from './pages/doctorPortal/patientConsult.jsx';
import DoctorRegistration from './pages/Register/DoctorRegister.jsx';
import RegistrationForm from './pages/Register/MainRegister.jsx';
import HomeDoctor from './pages/doctorPortal/HomeDoctor.jsx'
import ProfileDoctor from './pages/doctorPortal/ProfileDoctor.jsx'
import LogoutDoctor from './pages/doctorPortal/LogoutDoctor.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<div><Login/></div>

  },
{
  path:"/registrationForm",
  element:<div><RegistrationForm /></div>
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
},
 
{
  path:"/HomeDoctor" ,
  element:<div> <HomeDoctor /></div>
},
{
  path:"ProfileDoctor" ,
  element:<div> < ProfileDoctor/></div>
},
{
  path:"patientConsult" ,
  element:<div> < PatientConsult/></div>
},
{
  path:"LogoutDoctor" ,
  element:<div> < LogoutDoctor/></div>
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
