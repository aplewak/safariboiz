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
            <h4> Tuning your Boost/ Tuning Foreign Turbo Setups  </h4>
            <h6>  Preliminaries : </h6>
              <li> <b> Choosing Wastegate spring lb  </b> : Choose a spring thats somewhere 1/3- 1/2 of your desired boost level</li>
              <li> <b> too high Wastegate spring lb  </b> : wont allow us to have proper boost regulation</li>
              <li> <b> too low Wastegate spring lb  </b> : wont allow you to hit high enough targets </li>
              
            <b>Step 1 : Finding out when to acitvate the boost controller </b>
            <p>The idea here is that we need to activate the boost controller when the turbo isnt yet fully spooled (when the base boost is hit) </p>
            
            <b><p>So what we need to do is the following </p></b>
                    <li> <b> turn off boost controller  </b> : boostcal.st_enable = 0 </li>
                    <li> <b> turn off boost adaptation </b> :  boostcal.EnableBoostadap = 0</li>
                   <h5>Finish this tomorrow</h5>


       

     
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
