import React from 'react'
import {Link} from 'react-router-dom';
export default function Nbar() {
  return (
    <div>
      <ul>
      <li><a href="Home.js"><Link to ={'/Home'}>HOME</Link></a></li>
      <li><a href="Appoinment.js"><Link to ={'/Appoinment'}>APPOINMENT</Link></a></li>
      <li><a href="Doctors.js"><Link to ={'/Doctors'}>DOCTORS</Link></a></li>
      <li><a href="Services.js"><Link to ={'/Services'}>SERVICES</Link></a></li>
      <li><a href="About.js"><Link to ={'/About'}>ABOUT</Link></a></li>
    </ul>

    </div>
  )
  }

      
