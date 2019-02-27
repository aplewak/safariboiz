import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import {Collapse} from 'react-collapse';


class GetDetailTextForMISC extends Component {
   constructor() {
      super();
      this.state = {
     }
     //bind functions
  }
  render() {
    return (
    <Collapse isOpened={this.props.miscTextisOpen}>
     
          
          <div >
          <center>
        
         <a >   <b>misc items , specialty items , new features </b> </a>  
           
          </center>
        </div>
   
        
     
      
     
    </Collapse>
    );
  }
}

export default GetDetailTextForMISC;
