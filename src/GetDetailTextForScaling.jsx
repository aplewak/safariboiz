import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import {Collapse} from 'react-collapse';
import ignsc from '../src/IMAGES/scaleign.JPG'
import boostsc from '../src/IMAGES/scaleboost.JPG'
import fuelsc from '../src/IMAGES/scalefuel.JPG'



class GetDetailTextForScaling extends Component {
   constructor() {
      super();
      this.state = {
     }
     //bind functions
  }
  render() {
    return (
    <Collapse isOpened={this.props.scalingTextisOpen}>
      <div className="sft">
          <center >
          <div style={{width:'50%'}}>
          <b><h4>Overview :</h4> </b> Rescaling the axis so that we can tune according to load, and to be able to tune out misfire and knock easily
          <b><h5>When tuning past stage 3 read below</h5> </b> 
          <b><h4>Why its important :</h4> </b> When going past a stage 3 you will need to log information and have the axis scaled properly, otherwise missfires, knock and other dependancies when tuning can have scewed data and will be very hard to tune out.  
          <b><h4>How to :</h4> </b> These maps that need to be altered when going past stage 3 can be found by searching "airxsp" or XSP/YSP (x/y axis parameters). These maps are anything from scaling airmass,torque,battery voltage throughout a rpm range etc
          <b><h4>Examples  :</h4> </b> 
          
          <h6>
          <li>Ignition</li>
           <img className="" src={ignsc}   style={{maxWidth:'50%',height:'auto'}}alt="Logo" />
          <li>Boost</li>
           <img className="" src={boostsc}   style={{maxWidth:'50%',height:'auto'}}alt="Logo" />
          <li>fuel</li>
           <img className="" src={fuelsc}   style={{maxWidth:'50%',height:'auto'}}alt="Logo" />
           </h6>
          <b><h4>Summary :</h4>  Notice these maps are scaled in parallel and are adjusted for higher airmass. There are other maps you need to take into consideration but for now this is just an example. So now when you encounter a misfire or knock you can check the tables in the realtime panel for knock and missfire counters in which will tell you the affected ranges during load that need to be taken care of. 
         </b> </div></center>
        </div>
    </Collapse>
    );
  }
}

export default GetDetailTextForScaling;
