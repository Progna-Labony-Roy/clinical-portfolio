import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderNav from '../Navbar/HeaderNav';

const Main = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Outlet className=""></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;