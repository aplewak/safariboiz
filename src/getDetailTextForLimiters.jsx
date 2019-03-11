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
               
                  <tr>
                    <b><h4>Description : </h4></b>
                    

                    Various maps that limit your engines perfromance 
                    
                  </tr>
               <tr>
                <h4> Preliminaries : </h4>
                <table>
                <p>
                  <li> <b>Petrol torque</b> : (Airmass /3.1) = estimated petrol torque(Nm)</li>
                  <li><b> E85 torque</b> : (Airmass / 2.9) = estimated e85 torque(Nm)</li>
                  </p>
                  </table>
                 </tr>
              
                <h4><b> Common Limiting Maps </b></h4>
                <center>
                <table>
             
                <h10>
                    <p> <b> torqueCal.m_AirTorqueMap</b> : gearbox max torque pmiter, the 350/370 column has to be altered(fooled) to achieve higher tq.</p>
                    <p> <b> torqueCal.M_mangearpm </b> : max allowed torque pmit per gear</p>
                    <p> <b> torqueCal.M_EngMaxTab </b> : max engine output tq </p>
                    <p> <b> bstKnkCal.MaxAirmass</b> : Max requested airmass , most right column is used if no knock is detected</p>
                    <p> <b>Others under the limiters tab in t7 suite</b> </p>
                    </h10>
              
                </table>
                </center>
                <h4><b> Important  </b></h4>
                <h7><b>When altering these maps I tend to constantly check my airmass result viewer to make sure there are no limiting factors prior to flashing my ecu</b></h7>
                    <p> <b>Actions -> Airmass result viewer</b> </p>
                    <h4><b> Example Situation  </b></h4>
                <h8>So you changed all your airmass and torque limiters and you go to the airmass result view and see you have a bunch of limiters(different colored tabs on the top column) and the airmass values have not increased</h8>
                <h8>.This is because the limiters need to be altered in order to achieve your desired output </h8>

                  </center>
                <img className="" src={arv}   style={{maxWidth:'50%',height:'auto'}}alt="Logo" />
                  <div>
                <b>Ex: Here i had to change my turbospeedlimiter (raised to 1.0 across the board ) to achieve my 1700 mair request </b>
                </div>
                <img className="" src={tsl}   style={{maxWidth:'50%',height:'auto'}}alt="Logo" />
                <img className="" src={arv2}   style={{maxWidth:'50%',height:'auto'}}alt="Logo" />
                    <h4> <b>Lastly if you click the limiter text in the airmass result viewer it will bring up the associated maps</b> </h4>

        </div>
    </Collapse>
    );
  }
}

export default GetDetailTextForLimiters;
