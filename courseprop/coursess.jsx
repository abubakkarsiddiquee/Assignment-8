import React from 'react';
import '../courseprop/courseprop.css';
import logo from '../images/fotor_2023-4-1_1_30_15.png'
 
const style={
    width :"60px",
    hieght :"10px",}
const imgstyle={
        width :"450px",
        hieght :"280px",
        borderRadius:'8px',
 }
const Coursess = (props) => {
   

    const {name,img,date, duration,title}=props.course;
    return (
        <div className='main-contain'>
           <img style={ imgstyle} src={img} alt=''/>
           
            <div  className='main'>
           
           
            <div className='left'>
                <div   className='left-in'>
                     <img style={ style} src={logo} alt=''/>
                     <h5>{name}</h5>
                </div>
           
               
                 <p>Date : {date}</p>
             
             
            <h3> {title}</h3>
            <a href=" ">Mark As Read</a>
            </div>
            
            <div className='right'>
            <a href=" "><h6>Duration : {duration} min read </h6></a>   
            </div>
           
           
        </div>
        <hr></hr>
        </div>
        
    );
};

export default Coursess;