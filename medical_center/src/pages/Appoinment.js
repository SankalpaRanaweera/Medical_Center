import React from 'react'

export default function Appoinment() {
  return (

    <div className="appoinmentdiv">
     {/* import img2 from '../images/images.jpg'
     <img src={img2} alt ="sfsf" className="appoinmentimg"/>*/}
      
        <form  action="Script.js" method="post">
        
        <lable className="l1">Name</lable>
        <input type="text" name="name" className='input1'/><br/>
        <lable className="l2">Age</lable>
        <input type="text" name="age" className='input2'/><br/>
        <lable className="l3">Telephone</lable>
        <input type="text" name="telephone" className='input3'/><br/>
        <lable className="l4">Doctor Name</lable>
        <input type="text" name="doctor"className='input4'/><br/>
        <input type="submit" name="ok" value="Submit" className='appoinmentbtn'/>

      </form>

      
      
    </div>
  )
}
