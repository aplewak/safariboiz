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
import xsp from '../src/IMAGES/xsp.JPG'
import iplim from '../src/IMAGES/iplim.JPG'




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
            <table>
            <h4>  Preliminaries : </h4>
              <li> <b> Choosing Wastegate spring lb  </b> : Choose a spring thats somewhere 1/3- 1/2 of your desired boost level</li>
              <li> <b> too high Wastegate spring lb  </b> : wont allow us to have proper boost regulation</li>
              <li> <b> too low Wastegate spring lb  </b> : wont allow you to hit high enough targets </li>
              <li> understand limiters and how they work together</li>
              </table>
              
            <b><h3>Step 1 : Finding out when to activate the boost controller</h3> </b>
            <p>The idea here is that we need to activate the boost controller when the turbo isnt yet fully spooled (when the base boost is hit) </p>
            
            <b><p>So now lets disable the boost controller and log some full throttle runs </p></b>
            <table>
                    <li> <b> turn off boost controller  </b> : boostcal.st_enable = 0 </li>
                    <li> <b> turn off boost adaptation </b> :  boostcal.EnableBoostadap = 0</li>
                   
            <p>Once you complete this look for a good third gear pull throughout the rev range in your logs and fill in the following tables </p>
                    <li> <b> BoostCal.P_LimTab </b> </li>
                    <li> <b> BoostCal.I_LimTab </b> </li>
                    <p>So once the mair goes higher then the values in these tables then your boost controller will kick in</p>
            </table>
                    <img className="" src={iplim}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />
             <b><h3>Step 2  : Setting your boost intervals/tuning the boostcal.regmap</h3> </b>
                    <p>So since we have a higher base boost than before we now have to rescale our boostcal.regmap x-axis parameters</p>
                    <b><p>BoostCal.SetLoadXSP</p></b>
                    <img className="" src={xsp}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />
                    <p>So in my logs I hit a base boost of about 1200 so this is a good starting point.
                    I also added about 100 to every column until it was filled</p>
                    <b>Note: based on the turbo setup you may have more flowing capabilities or less so determining how high you can go is based on the flow characteristics of your turbo</b>



       

     
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
