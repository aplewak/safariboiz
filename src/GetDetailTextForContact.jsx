import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import {Collapse} from 'react-collapse';


class GetDetailTextForContact extends Component {
   constructor() {
      super();
      this.state = {
     }
     //bind functions
  }
  render() {
    return (
    <Collapse isOpened={this.props.contactTextisOpen}>
     
          
          <div >
          <center>
          <h2 >
         <a >   <b>Andrew </b> </a>    <b>Plewak</b>
            </h2>
            
            <h4>716 445 5470</h4>
            
            <h4>andrewplewak@gmail.com</h4>
          </center>
        </div>
   
        
     
          <Button style={{background:'#DAEAF6'}} onClick={this.props.CollapseContactInfo}><b>hide</b></Button>
     
    </Collapse>
    );
  }
}

export default GetDetailTextForContact;
