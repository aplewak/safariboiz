import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import {Collapse} from 'react-collapse';
import afrimg from '../src/afr.png'


class GetDetailTextForSoftware extends Component {
   constructor() {
      super();
      this.state = {
     }
     //bind functions
  }
  render() {
    return (
    <Collapse isOpened={this.props.softwareTextisOpen}>
      <div className="sft">
          <center>
          <h2>
         <a href='https://github.com/aplewak'>   <b>Software</b> </a>    <b>Projects</b>
            </h2>
            <h4>7 bar Boost Gauge</h4>
              <li> Monitor realtime readings from -30 inHG -> 101 psi. </li>
              <li> Custom c++ library for the mpx5700-gp sensor <a href='https://github.com/aplewak/mpx5700'>here</a> </li>
          
          <h4>Air Fuel Ratio Gauge</h4>
              <li> Input voltage 0 - 5v output 7.0 - 22.0  AFR</li>
              <div style={{display:'flex'}}>
          <div>
          </div>

            </div>
          <img className="" src={afrimg}  style ={{width:'120px',height:'auto'}}alt="Logo" />
          </center>
        </div>
      <Button style={{background:'#124E96'}} onClick={this.props.CollapseSoftwareInfo}><b>collapse</b></Button>
    </Collapse>
    );
  }
}

export default GetDetailTextForSoftware;
