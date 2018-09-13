import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const LOGO = () => {
    return (
        <div className="ma4 ma0 logo">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 140, width: 140}} >
                <div className="Tilt-inner"> 
                    <img src = {brain} alt ="logo" style= { { paddingTop: '20px' }}/>
                 </div>
            </Tilt>
        </div>
    )
} ;


export default LOGO;