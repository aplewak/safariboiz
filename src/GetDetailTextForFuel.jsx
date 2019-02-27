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
              <b>todo fill in</b>
        

            </h6>
            
         {/* <img className="" src={airmass}  style={{maxWidth:'30%',height:'auto'}} alt="Logo" />
          <img className="" src={pwm}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />*/}
          <img className="" src={fuel}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />
          </center>

    </Collapse>
    );
  }
}

export default GetDetailTextForFuel;
