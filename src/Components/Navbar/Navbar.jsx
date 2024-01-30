import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'

const Navber = () => {
    return ( 
         <div className='navber-container'>
            <div>
                <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
            </div>
                    
                <div className='navber'>
                    <Link to="/">home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/categoris">Categoris</Link>
                    <Link to="/meals"> Meals</Link>
                    <Link to="/contact">Contact</Link>
                </div>
        </div>
    );
       
};

export default Navber;