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
import rmupd from '../src/IMAGES/rmupd.JPG'




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
          <div style={{display:'responsive',width:'50%'}}>
          <h2>
            <a href='https://www.trionictuning.com/forum/viewtopic.php?f=57&t=3474'>   <b>Boost</b> </a>   
          </h2>
     
            <img className="" src={pwm}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />

            <h4> Tuning your Boost/ Tuning Foreign Turbo Setups  </h4>
            <b><h3>  Preliminaries : </h3></b>
          <div>
              <li> <b> Choosing Wastegate spring lb  </b> : Choose a spring thats somewhere 1/3- 1/2 of your desired boost level</li>
              <li> <b> too high Wastegate spring lb  </b> : wont allow us to have proper boost regulation</li>
              <li> <b> too low Wastegate spring lb  </b> : wont allow you to hit high enough targets </li>
              <li> understand limiters and how they work together</li>
              </div>
              
            <label style={{backgroundColor:'lightgrey',borderRadius:'5px'}}><b><h3>Step 1 : Finding out when to activate the boost controller</h3> </b></label>
            <p>The idea here is that we need to activate the boost controller when the turbo isnt yet fully spooled (when the base boost is hit) </p>
            
            <b><p>So now lets disable the boost controller and log some full throttle runs </p></b>
            <div>
                    <li> <b> turn off boost controller  </b> : boostcal.st_enable = 0 </li>
                    <li> <b> turn off boost adaptation </b> :  boostcal.EnableBoostadap = 0</li>
                    <li> <b> Fill the boostcal.regmap with 0's (0% duty cycle)  </b></li>
                   
            <p>Once you complete this look for a good third gear pull throughout the rev range in your logs and fill in the following divs </p>
                    <li> <b> BoostCal.P_LimTab </b> </li>
                    <li> <b> BoostCal.I_LimTab </b> </li>
                    <p>So once the mair goes higher then the values in these divs then your boost controller will kick in</p>
                    <p>The lower part of the I_limtab is when ilim becomes active , i can raise these so that it only becomes active past 900 mg/c as its not needed to be active before the turbo spools </p>
            </div>
                    <img className="" src={iplim}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />
             <label style={{backgroundColor:'lightgrey',borderRadius:'5px'}}><b><h3>Step 2  : Setting your boost intervals/tuning the boostcal.regmap</h3> </b></label>
                    <p>So since we have a higher base boost than before we now have to rescale our boostcal.regmap x-axis parameters</p>
                    <b><p>BoostCal.SetLoadXSP</p></b>
                    <img className="" src={xsp}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />
                    <p>So in my logs I hit a base boost of about 1200 so this is a good starting point.
                    I also added about 100 to every column until it was filled</p>
                    <b>Note: Based on your turbo setup you may have more or less flowing capabilities, so determining how high you can go is based on the flow characteristics of your turbo</b>
             <label style={{backgroundColor:'lightgrey',borderRadius:'5px'}}><b><h3>Step 3  : Fine tuning the boostcal.regmap</h3> </b></label>
                    <p><b>So now we have our targets set up we now want to do the following: </b></p>
             <div>
                    <li> <b> Activiate the boost controller  </b> : boostcal.st_enable = 1 </li>
                    <li> <b> Boostcal.regMap to filled with 0's  </b> </li>
                    <li> <b> Boostcal.Pmap to filled with 0's  </b>  </li>
                    <li> <b> Boostcal.Imap to filled with 0's  </b>  </li>
                    <li> <b> Boostcal.Dmap to filled with 0's  </b>  </li>
                    </div>
                    <h5>So now if we look at the Boostcal.regMap your support points should now include the new ones that you entered before</h5>
                    <img className="" src={rmupd}   style={{maxWidth:'30%',height:'auto'}}alt="Logo" />
                    <p> So the idea here is we will start at the first interval and work our way to the maximum interval by adjusting the regmap   </p>
                    </div>
             <center>
             <div style={{display:'responsive',width:'50%'}}>
              <label style={{backgroundColor:'lightgrey',borderRadius:'5px'}}><b><h3>Step 3.1  : Adjusting Airmass limiters(mreq)</h3> </b></label>
             <div >
                    <p><b>( Changing mreq ) : So to start off you must change your bstknckcal.maxairmass right most column to request the first interval airmass  </b></p>
                    <li> ex: In my 1300 interval I set the right most column to request 1300 mair between 3000-5800 rpm   </li>
              </div>
              
             <label style={{backgroundColor:'lightgrey',borderRadius:'5px'}}><b><h3>Step 3.2  : Adjusting actual Airmass (mair)</h3> </b></label>
             <div>
                    <p><b>(Adjusting mair) : By changing the duty cycle you then change how much air is delivered, so i would change the regmap to in intervals of 5-10% at at a time until I got within 1-3% of my airmass</b></p>
                    <li> ex: In my 1300 interval i set the duty cycle in my regmap to 2% because my base boost was just under that interval   </li>
            </div>
             <label style={{backgroundColor:'lightgrey',borderRadius:'5px'}}><b><h3>Step 3.3 : Log and repeat </h3> </b></label>
             <div>
                    <p><b>Now go out for a drive and log information , the idea is to get as close as possible to the targets </b></p>
                    <p><b>Once you dial in on one interval move up to the next one ( repeat 3.1-3) by adjusting , requested airmass, and adjusting the wastegate duty cylce until you complete the set </b></p>
            </div>
            </div>
            </center>
             
             <label style={{backgroundColor:'lightgrey',borderRadius:'5px'}}><b><h3>Step 4  : Re-Activating the pid controller </h3> </b></label>
            
                    <p><b> Now you need to revert the P,D and I maps to the original state and do the following    </b></p>
                    <p><b> When the pid controller it will influence how much you will undershoot/overshoot  </b></p>
                    <p><b> Regmap value + pid = target pwm (wastegate duty cycle)  </b></p>
                    <p><b> (mreq - mair achieved )* pconst(pmap xaxis) /100 = duty cycle to subtract from the intervals   </b></p>
                    <li> ex : (1500- 1460 )*50 / 100 = 2 = 2% so i would subtract 2% from my 1500 mair interval   </li>

          </center>
        </div>
      
      
    </Collapse>
        </div>
    );
  }
}

export default getDetailTextForBoost;
