import React, { useEffect, useState } from 'react';
import Coursess from '../../courseprop/coursess';
import '../../component/course/course.css'

const Course = () => {

    
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setCourses(data))
       },[])
    return (
        <div className='-container'>
              <div >
                 
                 {
                   courses.map( course =>
                   <Coursess
                   key={course.id}
                   course={course}
                   ></Coursess>
                    
                    
                    )
                 }
           </div>
            <div>
              <div className='cart-container'>

             <h3>Spent Time on Read : </h3>
           </div>

           <div className='cart-space'>
              
           </div>
            </div>
           
        </div>
    );
};

export default Course;