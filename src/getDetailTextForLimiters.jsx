import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import {Collapse} from 'react-collapse';
import arv from '../src/IMAGES/arv.JPG';
import tsl from '../src/IMAGES/tsl.JPG';
import arv2 from '../src/IMAGES/arv2.JPG';


class GetDetailTextForLimiters extends Component {
   constructor() {
      super();
      this.state = {
     }
     //bind functions
  }
  render() {
    return (
    <Collapse isOpened={this.props.limiterTextisOpen}>
      <div className="sft">
          
          {/*<img className="" src={afrimg}  style ={{width:'120px',height:'auto'}}alt="Logo" />*/}
          <center>
          <h2>
         <a href='https://www.trionictuning.com/forum/viewtopic.php?f=57&t=1135'>   <b>Limiters</b> </a> </h2>

            <div style={{display:'responsive'}}>

          
                </div>
                <h4>Description : </h4>
                <h6> Various maps that limit your engines perfromance </h6>
               
                <h6> Preliminaries : 
                    <p> <b> Petrol torque</b> : (Airmass /3.1) = estimated petrol torque(Nm)</p>
                    <p> <b> E85 torque</b> : (Airmass / 2.9) = estimated e85 torque(Nm)</p>
                 </h6>
                <h4><b> Common Limiting Maps </b></h4>
                <div>
                    <li> <b> torqueCal.m_AirTorqueMap</b> : gearbox max torque limiter, the 350/370 column has to be altered(fooled) to achieve higher tq.</li>
                    <li> <b> torqueCal.M_mangearLim </b> : max allowed torque limit per gear</li>
                    <li> <b> torqueCal.M_EngMaxTab </b> : max engine output tq </li>
                    <li> <b> bstKnkCal.MaxAirmass</b> : Max requested airmass , most right column is used if no knock is detected</li>
                    <p> <b>Others under the limiters tab in t7 suite</b> </p>
                </div>

                <h7><b>When altering these maps I tend to constantly check my airmass result viewer to make sure there are no limiting factors prior to flashing my ecu</b></h7>
                    <p> <b>Actions -> Airmass result viewer</b> </p>
                <h4>So you changed all your airmass and torque limiters and you go to the airmass result view and see you have a bunch of limiters and the airmass values have not increased</h4>
                <h4>This is because the limiters need to be altered in order to achieve your desired output </h4>
                <img className="" src={arv}   style={{maxWidth:'50%',height:'auto'}}alt="Logo" />

                  </center>
                  <div>
                <b>Ex: Here i had to change my turbospeedlimiter (raised to 1.0 across the board ) to achieve my 1700 mair request </b>
                </div>
                <img className="" src={tsl}   style={{maxWidth:'50%',height:'auto'}}alt="Logo" />
                <img className="" src={arv2}   style={{maxWidth:'50%',height:'auto'}}alt="Logo" />

        </div>
    </Collapse>
    );
  }
}

export default GetDetailTextForLimiters;
