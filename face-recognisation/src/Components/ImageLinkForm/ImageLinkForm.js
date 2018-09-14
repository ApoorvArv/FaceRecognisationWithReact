import React from 'react';

import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="f3">

                {'This Magic Brain will detect the faces in your picture. Give it a try'};
            
            </p>
            <div className= "center">
                <div className=" form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-80 center pa2 " type='text' onChange= {onInputChange}/> 
                    <button className="w-50 grow f4 link ph3 dib white bg-light-purple" onClick = {onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
} ;


export default ImageLinkForm;