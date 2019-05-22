import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Panel,Button,Image } from 'react-bootstrap';


class App extends Component {
   constructor() {
      super();
      
      this.state = {
        headerValue : 'Safariboiz'
       

      
     }
     //bind functions
      // this.force = this.force.bind(this);
     
     
    }

  
       

  render() {


    return (
      <div className="App" style={{background: 'white'}}>
       <div>{this.state.headerValue}</div>

         
      </div>
    );
  }
}

export default App;
