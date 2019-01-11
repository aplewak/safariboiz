import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import {Collapse} from 'react-collapse';
import man from '../src/IMAGES/manif.JPG'
import map from '../src/IMAGES/map.JPG'
import twg from '../src/IMAGES/twg.JPG'
import s200 from '../src/IMAGES/s200sx.JPG'




class GetDetailTextForHardware extends Component {
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
    <Collapse isOpened={this.props.hardwareTextisOpen}>
      <div>
          <center>
          <h2>
         <a >   <b>Hardware</b> </a>    <b>Projects</b>
            </h2>
     
            <h4>Flanges</h4>
              <li> Borg Warner s200sx T4 twin scroll turbine housings   </li>
              <li> Tial f38 wastegate </li>
              <li> B235X exhaust manifold </li>
              <li> map sensor  </li>
        <img className="map" style={{maxWidth:'30%',height:'auto'}} src={map}  alt="Logo" />
        <img className="man" style={{maxWidth:'30%',maxheight:'auto'}} src={s200}  alt="Logo" />
        <img className="man" style={{maxWidth:'30%',maxheight:'auto'}} src={twg}  alt="Logo" />
       

     
          </center>
        </div>
            
      <Button style={{background:'#0D8ABC'}} onClick={this.props.CollapseHardwareInfo}><b>collapse</b></Button>
      <center>
        </center>
    </Collapse>
        </div>
    );
  }
}

export default GetDetailTextForHardware;
