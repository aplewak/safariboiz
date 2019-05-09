import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import {Collapse} from 'react-collapse';
import airmass from '../src/IMAGES/airm.JPG'
import pwm from '../src/IMAGES/pwm.JPG'
import fuel from '../src/IMAGES/fuel.JPG'
import dyno from '../src/IMAGES/DYNOGRAPH.JPG'
import wbref from '../src/IMAGES/wbref.JPG'
import wbai from '../src/IMAGES/wbai.JPG'



class GetDetailTextForFuel extends Component {
   constructor() {
      super();
      this.state = {
        LightboxisOpen:false

     }

     //bind functions
     this.closeLightbox = this.closeLightbox.bind(this);


  }
     closeLightbox(){
        this.setState({LightboxisOpen: !this.state.LightboxisOpen});
     }
  render() {
    return (
    <Collapse isOpened={this.props.fuelTextisOpen}>
     <center>
          <h2>
         <a>   <b>Fuel </b> </a>
            </h2>
            <h6>
        

            </h6>
            
         {/* <img className="" src={airmass}  style={{maxWidth:'30%',height:'auto'}} alt="Logo" />
          <img className="" src={pwm}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />*/}
          <img className="" src={fuel}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />
              <b><h3>Preliminaries : </h3></b>
              <b>
              
              <div>
              Familiar with OPEN BINS ( 46s, 55p etc ) 
              , Knowledge of the VE fuel maps 
              , Wideband lambda sensor 
              </div>
             
              </b>
              <b><h3> Configuring your wideband setup: </h3></b>
              <b><h6>So from the documentation there is an open analog input slot on <b>pin 16</b> on the ecu harness </h6></b>
              <b><h6>This is good because t7 suite has an option to convert the 0-5v range into afr readings which will be used for the AUTOTUNE function later on </h6></b>
          <img className="" src={wbref}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />
          <img className="" src={wbai}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />
          </center>

    </Collapse>
    );
  }
}

export default GetDetailTextForFuel;
