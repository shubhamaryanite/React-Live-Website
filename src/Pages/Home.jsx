import React from 'react';
import { NavLink } from 'react-router-dom';
import Web from '../Image/Web.png';
import Common from './Common';

const Home = () => {
    return (
        <>
        <Common 
        name="Grow your businss with" 
        imgsrc={Web} visit='/service' 
        btname="Get Started"/>
        </>
    )
};

export default Home;