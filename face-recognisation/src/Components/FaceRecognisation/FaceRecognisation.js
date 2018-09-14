import React from 'react';

const FaceRecongnisation = ({imageUrl }) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img src= {imageUrl} alt='File to be detected' width="400px"  height="auto"/>
            </div>
        </div>
    )
} ;


export default FaceRecongnisation;