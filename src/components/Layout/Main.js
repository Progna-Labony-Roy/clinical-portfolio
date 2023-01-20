import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNav from '../Navbar/HeaderNav';

const Main = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Outlet className=""></Outlet>
        </div>
    );
};

export default Main;