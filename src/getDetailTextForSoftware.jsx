import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import {Collapse} from 'react-collapse';
import afrimg from '../src/IMAGES/afr.png'
import bst from '../src/IMAGES/bgb.png'


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
          
          {/*<img className="" src={afrimg}  style ={{width:'120px',height:'auto'}}alt="Logo" />*/}
          <center>
          <h2>
         <a href='https://github.com/aplewak'>   <b>Software</b> </a>    <b>Projects</b>
            </h2>

            <div style={{display:'responsive'}}>
            <div>
              <h4>7 bar Boost Gauge</h4>
            <img className="map" style={{width:'auto',maxHeight:'150px'}} src={bst}  alt="Logo" />
              <li> Monitor realtime readings from -30 inHG -> 101 psi. </li>
              <li> Custom c++ library for the mpx5700-gp sensor <a href='https://github.com/aplewak/mpx5700'>here</a> </li>
           </div>
           <div>
              <h4>Air Fuel Ratio Gauge</h4>
                <img className="map" style={{width:'auto',height:'150px'}} src={afrimg}  alt="Logo" />
                  <li> Input voltage 0 - 5v output 7.0 - 22.0  AFR</li>
            </div>
                </div>
                  </center>
        

        </div>
      <Button style={{background:'#124E96'}} onClick={this.props.CollapseSoftwareInfo}><b>collapse</b></Button>
    </Collapse>
    );
  }
}

export default GetDetailTextForSoftware;
