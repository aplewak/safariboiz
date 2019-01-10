import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import {Collapse} from 'react-collapse';
import airmass from '../src/AIRMASS.JPG'
import dyno from '../src/DYNOGRAPH.JPG'



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
         <a>   <b>T7 Suite Tuning</b> </a>
            </h2>
            
      <div style={{display:'flex'}}>
          <img className="afrPIC" src={airmass}  style ={{width:'auto',height:'200px'}}alt="Logo" />
          
          <img className="afrPIC" src={dyno}  style ={{maxWidth:'auto',maxHeight:'100%',position:'static'}}alt="Logo" />
          </div>
          </center>

      <Button style={{background:'#0D8ABC'}} onClick={this.props.CollapseTuningInfo}><b>collapse</b></Button>
    </Collapse>
    );
  }
}

export default GetDetailTextForTuning;
