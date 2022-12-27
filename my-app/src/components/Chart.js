import React, { Component } from 'react';
import { Chart } from 'chart.js';

class ChartS extends Component {
    ShowChart(){
        const dataTem = [];
        const datatHum = [];
        const dataLight = [];
        const dataTime=[];
    
        const rendChart = () => {
        // random
            let valtemp = Math.floor(Math.random() * 100);
            let valhum = Math.floor(Math.random() * 100);
            let vallight = Math.floor(Math.random() * 100);
            let time = new Date().toLocaleString();
    
            const temLength = dataTem.length;
            const humLength = datatHum.length;
            const lightLength = dataLight.length;
            const todayLength = dataTime.length;
            
            if(temLength < 6 || humLength < 6 || lightLength < 6 || todayLength < 6  ){
            dataTem.push(valtemp);
            datatHum.push(valhum);
            dataLight.push(vallight);
            dataTime.push(time);
            }
            if(temLength === 6 || humLength=== 6 || lightLength === 6 || todayLength ===6 ){
            dataTem.shift();
            datatHum.shift();
            dataLight.shift();
            dataTime.shift();
            dataTem.push(valtemp);
            datatHum.push(valhum);
            dataLight.push(vallight);
            dataTime.push(time);
            }
            new Chart("myChart", {
            type: "line",
            data: {
                labels: dataTime,
                datasets: [{ 
                data: dataTem,
                borderColor: "red",
                fill: false
                }, { 
                data: datatHum,
                borderColor: "green",
                fill: false
                }, { 
                data: dataLight,
                borderColor: "blue",
                fill: false
                }]
            },
            options: {
                legend: {display: false}
            }
            });
        } 
        setInterval(rendChart,2000)
    }
    render() {
        return (
            <>  
                <h5> Data thời gian thực </h5>
                <canvas id="myChart" style={{width: '100%', maxWidth: '600px'}} > </canvas>
            </>
        );
    }
}

export default ChartS;