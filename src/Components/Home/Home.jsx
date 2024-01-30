import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Navbar/Navbar';
import Category from '../Categoris/Category/Category';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
           <div>
           {/* <Category></Category> */}
           </div>
        </div>
    );
};

export default Home;