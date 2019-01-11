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



class GetDetailTextForTuning extends Component {
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
    <Collapse isOpened={this.props.tuningTextisOpen}>
     <center>
          <h2>
         <a>   <b>Engine Performance Tuning </b> </a>
            </h2>
            <h6>
              <b>Custom T7 engine management tuning: </b>
             
              <li>9-3 2000-2002 4Cyl</li>
              <li>9-5 1998-2010 4Cyl</li>

            </h6>
            
          <img className="" src={airmass}  style={{maxWidth:'30%',height:'auto'}} alt="Logo" />
          <img className="" src={pwm}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />
          <img className="" src={fuel}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />
          </center>

      <Button style={{background:'#0D8ABC'}} onClick={this.props.CollapseTuningInfo}><b>collapse</b></Button>
    </Collapse>
    );
  }
}

export default GetDetailTextForTuning;
