import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import GetDetailTextForLimiters from "../src/getDetailTextForLimiters.jsx"
import GetDetailTextForBoost from "../src/GetDetailTextForBoost.jsx"
import GetDetailTextForFuel from "../src/GetDetailTextForFuel.jsx"
import {Collapse} from 'react-collapse';
import turbo from '../src/IMAGES/turbo.JPG'

class App extends Component {
   constructor() {
      super();
      
      this.state = {
        headerValue : 'Trionic Tuning Tutorials'
        , limiterTextisOpen : false
        , boostTextisOpen : false
        , fuelTextisOpen : false
        , miscTextisOpen : false
        , LightboxisOpen : false
        , randColor : ''

      
     }
     //bind functions
      this.force = this.force.bind(this);
      this.getDetailTextForLimiters = this.getDetailTextForLimiters.bind(this);
      this.getDetailTextForBoost = this.getDetailTextForBoost.bind(this);
      this.getDetailTextForFuel = this.getDetailTextForFuel.bind(this);
     
    }

   
    force(){
      console.log('force update');
    }

    getDetailTextForLimiters(){
      this.setState({
          limiterTextisOpen: !this.state.limiterTextisOpen
          ,boostTextisOpen: false
          ,fuelTextisOpen: false
          ,miscTextisOpen: false
          ,headerValue: 'Limiters'
      });
      console.log('click');
    }
    getDetailTextForBoost(){
      this.setState({
        boostTextisOpen: !this.state.boostTextisOpen
          ,limiterTextisOpen: false
          ,fuelTextisOpen: false
          ,miscTextisOpen: false
          ,headerValue: 'Boost '
      });
      console.log('click');
    }
    getDetailTextForFuel(){
      this.setState({
        fuelTextisOpen: !this.state.fuelTextisOpen
        ,limiterTextisOpen: false
        ,boostTextisOpen: false
        ,miscTextisOpen: false
          ,headerValue: 'Fuel'
      });
      console.log('click');
    }
  
       

  render() {


    return (
      <div className="App" style={{background: 'white'}}>
 
        <div>
        
      
        <div className="head" style={{background:'white'}}>

           <h2 className="headTitle" 
          style={{background:'#e2dcd5', color:'white', fontSize:'36px', borderRadius:'5px',fontFamily:'DejaVu Sans Mono, monospace'}}>
          <b>
          
            {this.state.headerValue}  
            </b>
          </h2>
           
          

        </div> 
        <b>
            <Button  className="but1" onClick={this.getDetailTextForLimiters} style={{background:'#ff5959'}}>  <b>Limiters <sub>1</sub></b></Button>
            <Button  className="but2" onClick={this.getDetailTextForBoost} style={{background:'#ffad5a'}}>  <b>Boost  <sub>2</sub></b></Button>
            <Button  className="but3" onClick={this.getDetailTextForFuel} style={{background:'#4f9da6'}}>  <b>Fuel <sub>3</sub> </b></Button>
            <Button  className="but3"  style={{background:'#f8ed86'}}>  <b>ignition <sub>todo</sub> </b></Button>
            <Button  className="but3"  style={{background:'#29cdb5'}}>  <b>others <sub>todo</sub> </b></Button>
            
        </b>

        
        

          <div>
            <GetDetailTextForLimiters
              className="sftText"
              limiterTextisOpen={this.state.limiterTextisOpen} 
            />
            <GetDetailTextForBoost
              className="hrdText"
              boostTextisOpen={this.state.boostTextisOpen} 
            />
            <GetDetailTextForFuel
            className="cntText"
              fuelTextisOpen = {this.state.fuelTextisOpen}
            />
          

      </div>
      </div>
       
         <center><b>APLEWAK@GITHUB.IO/trionictuningtutorials</b></center>
      </div>
    );
  }
}

export default App;
