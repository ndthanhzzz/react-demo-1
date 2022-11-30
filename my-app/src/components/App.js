import React, { Component } from 'react';
 import './../css/App.css';
 import './../css/bootstrap-grid.css';
 import './../css/bootstrap-grid.min.css';
 import './../css/bootstrap.css';
 import './../css/bootstrap.min.css';

 import Nav from './nav';
 import Data from './Data';
 import ChartAndBut from './ChartAndBut';



class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Data/>
        <ChartAndBut/>
      </div>

    );
  }
}

export default App;