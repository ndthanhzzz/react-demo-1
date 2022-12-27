import React, { Component } from 'react';
import { Button } from 'antd';
import imgLightOn from './../image/light-on.png';
import imgLightOff from './../image/light-off.png';

class DivButton extends Component {
    LightOn1(){
        // document.getElementById('imgL').src = 'https://cdn-icons-png.flaticon.com/512/4020/4020112.png';
        document.getElementById('imgL').src = imgLightOn;
        document.getElementById("bON").style.backgroundColor="rgb(0, 255, 0)";
        document.getElementById("bOFF").style.backgroundColor="gray";
    }
    LightOff1(){
        // document.getElementById('imgL').src = 'https://cdn-icons-png.flaticon.com/512/4020/4020112.png';
        document.getElementById('imgL').src = imgLightOff;
        document.getElementById("bON").style.backgroundColor="gray";
        document.getElementById("bOFF").style.backgroundColor="red";
    }
    LightOn2(){
        // document.getElementById('imgL').src = 'https://cdn-icons-png.flaticon.com/512/4020/4020112.png';
        document.getElementById('imgL2').src = imgLightOn;
        document.getElementById("bON2").style.backgroundColor="rgb(0, 255, 0)";
        document.getElementById("bOFF2").style.backgroundColor="gray";
    }
    LightOff2(){
        // document.getElementById('imgL').src = 'https://cdn-icons-png.flaticon.com/512/4020/4020112.png';
        document.getElementById('imgL2').src = imgLightOff;
        document.getElementById("bON2").style.backgroundColor="gray";
        document.getElementById("bOFF2").style.backgroundColor="red";
    }
    
    render() {
        return (
            <>
                {/* Button 1 */}
                <div id="buton-light" className="bgrlight bogoc" style={{height: '250px', width: '100%', marginLeft: '35px', marginBottom: '10px'}}> 
                    <img id="imgL" src={imgLightOff} className="top-center" style={{width: '100px', borderRadius: '30px'}} alt="imgLight-off" />   
                    <h5 style={{lineHeight: '75px'}}> Bóng đèn 1 </h5> 
                    {/* classic button */}
                    <Button id='bON' onClick={() => this.LightOn1()} className="bgrbut"> Bật </Button>  
                    <Button id='bOFF' onClick={() => this.LightOff1()} className="bgrbutoff"> Tắt </Button>
                </div>
                {/* Button 2 */}
                <div id="buton-fan" className="bgrfan bogoc" style={{height: '250px', width: '100%', marginLeft: '35px'}}>
                    <img id="imgL2" src={imgLightOff} className="top-center" style={{width: '100px', borderRadius: '30px'}} alt="imgLight-off" />   
                    <h5 style={{lineHeight: '75px'}}> Bóng đèn 2 </h5> 
                    {/* classic button */}
                    <Button id='bON2' onClick={() => this.LightOn2()} className="bgrbut"> Bật </Button>  
                    <Button id='bOFF2' onClick={() => this.LightOff2()} className="bgrbutoff"> Tắt </Button>
                </div>
            </>
        );
    }
}

export default DivButton;