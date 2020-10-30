import React from 'react';
import Common from './Common';
import Web from '../Image/Web.png';
import Room from '../Image/room.png';
import Meeting from '../Image/meetings.png';

const About = () => {
    return (
        <>
        <Common 
        name="Welcome to About page" 
        imgsrc={Room} visit='/contact' 
        btname="Contact Now"/>
        </>
    )
};

export default About;