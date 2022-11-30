import React, { Component } from 'react';
    import imgFanOff from './../image/fan-off.png';
    import imgLightOff from './../image/light-off.png';
    // import './../scripts/main.js'
class ChartAndBut extends Component {
    render() {
        return (
            <div>
                <div className="row text-center text-white" style={{margin: '10px'}}>
                {/* Chart */}        
                <div className="col-sm-8 bgrchart bogoc" style={{height: '510px'}}>
                    <h5> Data thời gian thực </h5>
                    <figure className="highcharts-figure">
                    <div id="bieudo" />
                    </figure>                    
                </div>
                {/* Button */}      
                <div className="col-sm-4">
                    <div className="row">
                    {/* Button 1 */}
                    <div id="buton-light" className="bgrlight bogoc" style={{height: '250px', width: '100%', marginLeft: '35px', marginBottom: '10px'}}> 
                        <img id="imageLight" src={imgLightOff} className="top-center" style={{width: '100px', borderRadius: '30px'}} alt="imgLight-off" />   
                        <h5 style={{lineHeight: '75px'}}> Bóng đèn </h5> 
                        {/* classic button */}
                        <button id="bON" type="button" className="bgrbut" onclick="LightOn()"> Bật </button>  
                        <button id="bOFF" type="button" className="bgrbut" style={{backgroundColor: 'red'}} onclick="LightOff()"> Tắt </button>
                    </div>
                    {/* Button 2 */}
                    <div id="buton-fan" className="bgrfan bogoc" style={{height: '250px', width: '100%', marginLeft: '35px'}}>
                        <img id="imageFan" src={imgFanOff} className="top-center" style={{width: '100px', borderRadius: '30px'}} alt="imgFan-off" />    
                        <h5 style={{lineHeight: '75px'}}> Quạt gió </h5>
                        {/* Switch button */}
                        <label className="switch">
                        <input id="toggleswitch" type="checkbox" />
                        <span className="slider round" />
                        </label>
                    </div>
                    </div>    
                </div>
                </div>
            </div>
        );
    }
}

export default ChartAndBut;