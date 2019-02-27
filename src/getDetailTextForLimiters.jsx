import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';
import {Collapse} from 'react-collapse';
import afrimg from '../src/IMAGES/afr.png'
import bst from '../src/IMAGES/bgb.png'


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
                  </center>
        </div>
    </Collapse>
    );
  }
}

export default GetDetailTextForLimiters;
