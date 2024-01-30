import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Navber from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <h1>im home page</h1>
            <Outlet></Outlet>
            {/* <Category></Category> */}
        </div>
    );
};

export default Home;