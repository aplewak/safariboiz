import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import {Collapse} from 'react-collapse';
import arv from '../src/IMAGES/arv.JPG';
import tsl from '../src/IMAGES/tsl.JPG';
import arv2 from '../src/IMAGES/arv2.JPG';
import tqref from '../src/IMAGES/tqref.JPG';
import tqref2 from '../src/IMAGES/tqref2.JPG';
import tqref3 from '../src/IMAGES/tqref3.JPG';
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
  <div style={{display:'responsive',width:'50%'}}>
    
  </div>
  
  
  <b><h4>Description : </h4></b>
  
  Various maps that limit your engines perfromance
  
  
  
  <h4> Preliminaries : </h4>
  
  
  
  <li> <b>Petrol torque</b> : (Airmass /3.1) = estimated petrol torque(Nm)</li>
  <li><b> E85 torque</b> : (Airmass / 2.9) = estimated e85 torque(Nm)</li>
  
  
  
  <div  style={{display:'responsive',width:'25%'}}>
  <li> <h4><b> VIN LIMITERS (must read)</b>
  </h4> For certain vins theres a VIN limiter for th 2.0 and 2.3 engines. Ensure that if you have a 2.3 use a capital <b>G</b> for the 8th character in the vin and <b>K</b> for 2.0 engines. 
  If you do not you will then be limited to about 290 nm which roughly equates 900 mair </li>
  <li>example : YS3EH45<b>G</b>763502208 </li>
  </div>
  <h4><b> Common Limiting Maps </b></h4>
  <center>
  <div>
    <center>
    <div>
      <h6  style={{display:'responsive',width:'25%'}}>
      <p>
        <p> <b> torqueCal.m_AirTorqueMap</b> : gearbox max torque pmiter, the 350/370 column has to be altered(fooled) to achieve higher tq.</p>
        <p> <b> torqueCal.M_mangearpm </b> : max allowed torque pmit per gear</p>
        <p> <b> torqueCal.M_EngMaxTab </b> : max engine output tq , this points to the air/torque maps 330 column in this case </p>
        <p> <b> bstKnkCal.MaxAirmass</b> : Max requested airmass , most right column is used if no knock is detected</p>
        <p> <b>Others under the limiters tab in t7 suite</b> </p>
      </p>
      </h6>
    </div>

  <div style={{display:'responsive',width:'50%'}}>

    <h4><b> Keep in mind for adjusting torque limiters </b></h4>
    <h6><b>
    <div>
      <div>
        The engine torque limiter maps references the air/torq maps.
        <li>
          For the example below, Where 330nm is referenced in the rev range in the eng tq limiter is where the max torque will be requested.
        </li>
        <li>
          Adjust the air/torque maps accordingly so that your airmass equates to roughly the same nm torque and then check the airmass result viewer to ensure you did everything correct
        </li>
      </div>
    </div>
    </b>
    </h6>
    </div>
    </center>
    <div>
      <img className="" src={tqref}   style={{maxWidth:'50%',height:'auto'}}alt="Logo" />
    </div>
    <div>
      <img className="" src={tqref2}   style={{maxWidth:'50%',height:'auto'}}alt="Logo" />
    </div>
    <img className="" src={tqref3}   style={{maxWidth:'50%',height:'auto'}}alt="Logo" />
    
  </div>
  </center>
  <div style={{display:'responsive',width:'50%'}}>
  <h4><b> Important  </b></h4>
  <h6><b>When altering these maps I tend to constantly check my airmass result viewer to make sure there are no limiting factors prior to flashing my ecu</b></h6>
  <p> <b>Actions -> Airmass result viewer</b> </p>
  <h4><b> Example Situation  </b></h4>
  <h6>So you changed all your airmass and torque limiters and you go to the airmass result view and see you have a bunch of limiters(different colored tabs on the top column) and the airmass values have not increased</h6>
  <h6>.This is because the limiters need to be altered in order to achieve your desired output </h6>
  </div>
  </center>
  <img className="" src={arv}   style={{maxWidth:'50%',height:'auto'}}alt="Logo" />
  <div>
    <b>Ex: Here i had to change my turbospeedlimiter (raised to 1.0 across the board ,and raise the other turbospeedtab to new max airmass) to achieve my 1700 mair request </b>
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