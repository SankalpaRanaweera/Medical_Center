import React from 'react'

export default function Appoinment() {
  return (

    <div className="appoinmentdiv">
     {/* import img2 from '../images/images.jpg'
     <img src={img2} alt ="sfsf" className="appoinmentimg"/>*/}
      
        <form  action="Script.js" method="post">
        
        <lable className="l1">Name</lable>
        <input type="text" name="name" placeholder="   Enter Your Name" className='input1'/><br/>
        <lable className="l2">Age</lable>
        <input type="text" name="age" placeholder="   Enter Your Age" className='input2'/><br/>
        <input type="submit" name="ok" value="Submit" className='appoinmentbtn'/>

      </form>

      
      
    </div>
  )
}
