import React from 'react';
import logo from '../../images/fotor_2023-4-1_1_30_15.png';
import './header.css';





const Header = () => {

    function handleClick() {
        window.location.href = "../../blog.html";
      }

    const style={
        width :"50px",
        hieght :"20px",

    }
    const btnBlogStyle={
        width :"150px",
        hieght :"100px",
        backgroundColor:'gray',
        borderRadius:"5px",
        border:"1px solid gray",
        fontSize:"bold",
       color:"White"
          
    }
    return (
        <div className='pheader'>
             <div className='header'>
            <div>
               <h3>Knowledge Cafe</h3>
            </div>

            <div>

            
       <button style={btnBlogStyle}  onClick={handleClick}>Blog</button>
    
                
            </div>

            <div>
                <img src={logo} style={style} alt="" />
            </div>

            
             
        </div>
        <hr></hr>
        
        </div>
       
        
    );
};

export default Header;