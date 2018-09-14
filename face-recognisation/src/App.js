import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import FaceRecognisation from './Components/FaceRecognisation/FaceRecognisation';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: 'eda9fff67f5d44849908bd81ae169175'
 });


const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
       
    };
  }

  onInputChange = (event) => {

    this.setState({input: event.target.value});
   
  }

  onButtonSubmit = () => {
    console.log('Click'); 

    this.setState({imageUrl : this.state.input});

    app.models
    .predict(Clarifai.FACE_DETECT_MODEL,
             this.state.input)
    .then(
       function(response) {
        // do something with response
      console.log(response);
      },
      function(err) {
      // there was an error
      console.log('NOt working');
      }
  );

  };



  render() {
    return (
      <div className="App">
      
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange= {this.onInputChange}
                       onButtonSubmit ={this.onButtonSubmit}/>
        <Particles className='particles' params={particlesOptions} />
        <FaceRecognisation imageUrl={this.state.imageUrl}/> 
       
       
      
      
  
      </div>
    )
  }
}

export default App;
