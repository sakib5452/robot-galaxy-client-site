import React from 'react';
import Navbar from '../../pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;