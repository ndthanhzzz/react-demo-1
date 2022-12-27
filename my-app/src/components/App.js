import React, { Component } from 'react';
import './../css/App.css';
import './../css/bootstrap-grid.css';
import './../css/bootstrap-grid.min.css';
import './../css/bootstrap.css';
import './../css/bootstrap.min.css';
import Nav from './Nav';
// import Data from './Data';
import DivButton from './DivButton';
import ChartS from './Chart';
import Random from './Random';

class App extends Component {
  render() {
    return (
      <div>
            <h1 className="text-center text-white" style={{height: '100px'}}> 
              Nguyễn Đăng Thanh - B19DCDT219 - JavaScript
            </h1>
            <div className="row">
                    <Nav/>
            </div> 
            {/* Div Sensor */}
            <div className="row text-center text-dark">
                    <Random/>
            </div>
            {/* Div Chart + Button */}
            <div className="row text-center text-white" style={{margin: '10px'}}>
                  {/* Chart */}        
                  <div className="col-sm-8 bgrchart bogoc" style={{height: '510px'}}>
                        <ChartS/>                    
                  </div>
                  {/* Button */}      
                  <div className="col-sm-4">
                    <div className="row">
                        <DivButton/>
                    </div>    
                  </div>
            </div>
      </div>
    );
  }
}

export default App;