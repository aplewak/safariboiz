import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import GetDetailTextForSoftware from "../src/getDetailTextForSoftware.jsx"
import GetDetailTextForHardware from "../src/GetDetailTextForHardware.jsx"
import GetDetailTextForContact from "../src/GetDetailTextForContact.jsx"
import GetDetailTextForTuning from "../src/GetDetailTextForTuning.jsx"
import {Collapse} from 'react-collapse';

class App extends Component {
   constructor() {
      super();
      
      this.state = {
        headerValue : '{APLEWAK@poop.IO}'
        , softwareTextisOpen : false
        , hardwareTextisOpen : false
        , contactTextisOpen : false
        , tuningTextisOpen : false
        , LightboxisOpen : false
        , randColor : ''

      
     }
     //bind functions
      this.force = this.force.bind(this);
      this.getDetailTextForSoftware = this.getDetailTextForSoftware.bind(this);
      this.getDetailTextForHardware = this.getDetailTextForHardware.bind(this);
      this.getDetailTextForTuning = this.getDetailTextForTuning.bind(this);
      this.getDetailTextForContact = this.getDetailTextForContact.bind(this);
      this.getDetailTextForTuning = this.getDetailTextForTuning.bind(this);
     
    }

   
    force(){
      console.log('force update');
    }

    getDetailTextForSoftware(){
      this.setState({
          softwareTextisOpen: !this.state.softwareTextisOpen
          ,hardwareTextisOpen: false
          ,contactTextisOpen: false
          ,tuningTextisOpen: false
          ,randColor: Math.random()*255
      });
      console.log('click');
    }
    getDetailTextForHardware(){
      this.setState({
        hardwareTextisOpen: !this.state.hardwareTextisOpen
          ,softwareTextisOpen: false
          ,contactTextisOpen: false
          ,tuningTextisOpen: false
          ,randColor: Math.random()*255
      });
      console.log('click');
    }
    getDetailTextForContact(){
      this.setState({
        contactTextisOpen: !this.state.contactTextisOpen
        ,softwareTextisOpen: false
        ,hardwareTextisOpen: false
        ,tuningTextisOpen: false
          ,randColor: Math.random()*255
      });
      console.log('click');
    }
    getDetailTextForTuning(){
      this.setState({
        tuningTextisOpen: !this.state.tuningTextisOpen
        ,softwareTextisOpen: false
        ,hardwareTextisOpen: false
        ,contactTextisOpen: false
          ,randColor: Math.random()*255
      });
      console.log('click');
    }
       

  render() {


    return (
      <div className="App" style={{background: 'white'}}>
 
        <div>
        
      
        <div className="head" style={{background:'#'+10000}}>

          <h2 className="headTitle" ><b>  {this.state.headerValue}  </b></h2>
        
          

        </div> 
        <b>
            <Button  className="but1" onClick={this.getDetailTextForSoftware} style={{background:'#124E96'}}>  <b>Software</b></Button>
            <Button  className="but2" onClick={this.getDetailTextForHardware} style={{background:'#0D8ABC'}}>  <b>Hardware </b></Button>
            <Button  className="but3" onClick={this.getDetailTextForTuning} style={{background:'skyblue'}}>  <b>Tuning </b></Button>
            <Button  className="but4" onClick={this.getDetailTextForContact} style={{background:'#DAEAF6'}}><b>Contact </b></Button>
        </b>

        
        

          <div>
            <GetDetailTextForSoftware
              className="sftText"
              softwareTextisOpen={this.state.softwareTextisOpen} 
              CollapseSoftwareInfo={this.getDetailTextForSoftware}
            />
            <GetDetailTextForHardware
              className="hrdText"
              LightboxisOpen={this.state.LightboxisOpen}
              hardwareTextisOpen={this.state.hardwareTextisOpen} 
              CollapseHardwareInfo={this.getDetailTextForHardware}
            />
            <GetDetailTextForContact
            className="cntText"
              contactTextisOpen = {this.state.contactTextisOpen}
              CollapseContactInfo = {this.getDetailTextForContact}
            />
            <GetDetailTextForTuning
            className="sftText"
              tuningTextisOpen = {this.state.tuningTextisOpen}
              CollapseTuningInfo = {this.getDetailTextForTuning}
            />

      </div>
      </div>
       
         <center><b>APLEWAK@GITHUB.IO</b></center>
      </div>
    );
  }
}

export default App;
