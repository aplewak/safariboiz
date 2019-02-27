import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import {Collapse} from 'react-collapse';
import man from '../src/IMAGES/manif.JPG'
import map from '../src/IMAGES/map.JPG'
import pwm from '../src/IMAGES/pwm.JPG'
import twg from '../src/IMAGES/twg.JPG'
import s200 from '../src/IMAGES/s200sx.JPG'




class getDetailTextForBoost extends Component {
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
      <div>
    <Collapse isOpened={this.props.boostTextisOpen}>
      <div>
          <center>
          <h2>
         <a href='https://www.trionictuning.com/forum/viewtopic.php?f=57&t=3474'>   <b>Boost</b> </a>   
            </h2>
     
            <img className="" src={pwm}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />

       

     
          </center>
        </div>
      
      <center>
        </center>
    </Collapse>
        </div>
    );
  }
}

export default getDetailTextForBoost;
