import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home/Home';
import Main from '../Layout/Main';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact'


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
])