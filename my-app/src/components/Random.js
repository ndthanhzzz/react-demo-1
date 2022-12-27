import React, { Component } from 'react';
import { Button } from 'antd';

class Random extends Component {
    constructor(props) {
      super(props);
      this.state = {
        gtemp: 0,
        ghum: 0,
        glight: 0
      }
    }
  
    componentDidMount() {
      document.getElementById('Temp').innerHTML = this.state.gtemp;
      document.getElementById('Hum').innerHTML = this.state.ghum;
      document.getElementById('Light').innerHTML = this.state.glight;
    }
    componentDidUpdate() {
        document.getElementById('Temp').innerHTML = this.state.gtemp;
        document.getElementById('Hum').innerHTML = this.state.ghum;
        document.getElementById('Light').innerHTML = this.state.glight;
    }
  
    render() {
      return (
        <>
        <div className="col-sm-4" style={{textAlign: 'center', fontSize: '25px'}}>
            <div className="bogoc" id="Temp" style={{backgroundColor: 'red'}}> {this.state.gtemp} </div>
            <Button onClick={() => this.setState({ gtemp: Math.floor(Math.random() * 100) })}> Change Temp </Button>
            
        
        </div>
        <div className="col-sm-4" style={{textAlign: 'center', fontSize: '25px'}}>
            <div className="bogoc" id="Hum" style={{backgroundColor: '#3399ff'}}> {this.state.hum} </div>
            <Button onClick={() => this.setState({ ghum: Math.floor(Math.random() * 100) })}> Change Hum </Button>
            
        </div>
        <div className="col-sm-4" style={{textAlign: 'center', fontSize: '25px'}}>
            <div className="bogoc" id="Light" style={{backgroundColor: '#ffff00'}}> {this.state.light} </div>
            <Button onClick={() => this.setState({ glight: Math.floor(Math.random() * 100) })}> Change Light </Button>
           
        </div>
    </>
      );
    }
  }

  export default Random;