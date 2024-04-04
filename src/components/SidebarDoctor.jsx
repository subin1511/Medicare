import React, { useState } from 'react';
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
   
    const menuItem=[
        {
            path:"/HomeDoctor",
            name:"Home"
        },
        {
            path:"/patientConsult",
            name:"PatientConsult"
        },
        {
            path:"/ProfileDoctor",
            name:"Profile"
        },
        {
            path:"/",
            name:"Logout"
        }
    ]
    return (
        <div className="container">
           <div style={{width:  "300px"}} className="sidebar">
               <div className="top_section">
                    <h1 style={{display:"block" }} className="username">Username</h1>
                    <div style={{marginLeft: "90px"}} className="bars">
                    </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display:"block"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;