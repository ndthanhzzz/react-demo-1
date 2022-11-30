    const dataTem = [];
    const datatHum = [];
    const dataLight = [];
    const dataTime=[];

    setInterval(() => {
    // random
        let valtemp = Math.floor(Math.random() * 100);
        let valhum = Math.floor(Math.random() * 100);
        let vallight = Math.floor(Math.random() * 100);
    // temperature
                if (valtemp>=00 && valtemp<10) document.getElementById("Temp").style.backgroundColor="#ffb3b3";
                if (valtemp>=10 && valtemp<20) document.getElementById("Temp").style.backgroundColor="#ff9999";
                if (valtemp>=20 && valtemp<40) document.getElementById("Temp").style.backgroundColor="#ff6666";
                if (valtemp>=40 && valtemp<60) document.getElementById("Temp").style.backgroundColor="#ff4d4d";
                if (valtemp>=60 && valtemp<=100) document.getElementById("Temp").style.backgroundColor="#ff0000";
            document.getElementById("Temp").innerHTML = "Nhiệt độ" + "<br>" + valtemp +"*C";
    // hum
                if (valhum>=00 && valhum<20) document.getElementById("Hum").style.backgroundColor="#b3d9ff";
                if (valhum>=20 && valhum<40) document.getElementById("Hum").style.backgroundColor="#99ccff";
                if (valhum>=40 && valhum<60) document.getElementById("Hum").style.backgroundColor="#80bfff";
                if (valhum>=60 && valhum<80) document.getElementById("Hum").style.backgroundColor="#4da6ff";
                if (valhum>=80 && valhum<=100) document.getElementById("Hum").style.backgroundColor="#3399ff";
            document.getElementById("Hum").innerHTML = "Độ Ẩm"+ "<br>" + valhum +"%";
    // light
                if (vallight>=00 && vallight<20) document.getElementById("Light").style.backgroundColor="#ffffcc";
                if (vallight>=20 && vallight<40) document.getElementById("Light").style.backgroundColor="#ffff99";
                if (vallight>=40 && vallight<60) document.getElementById("Light").style.backgroundColor="#ffff80";
                if (vallight>=60 && vallight<80) document.getElementById("Light").style.backgroundColor="#ffff4d";
                if (vallight>=80 && vallight<=100) document.getElementById("Light").style.backgroundColor="#ffff00";
            document.getElementById("Light").innerHTML = "Ánh sáng" + "<br>" + vallight + " Lux";

    // var today = new Date();
    var time = new Date().toLocaleString();

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
    if(temLength == 6 || humLength== 6 || lightLength == 6 || todayLength ==6 ){
        // .pop(): delete last item
        // .shift(): delete first item
        dataTem.shift();            
        datatHum.shift();
        dataLight.shift();
        dataTime.shift();
        dataTem.push(valtemp);
        datatHum.push(valhum);
        dataLight.push(vallight);
        dataTime.push(time);
    }
        Highcharts.chart('bieudo', {
            title: {
                text: 'Temp - Hum - Light'
            },
            subtitle: {
                text: 'Thanh_DT219'
            },
            yAxis: {
                title: {
                    text: 'Value'
                }
            },
            xAxis: {
                categories: dataTime
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
            series: [{
                name: 'Nhiệt độ',
                data: dataTem
        
            }, {
                name: 'Độ ẩm',
                data: datatHum
        
            }, {
                name: 'Ánh sáng',
                data: dataLight
        
            },],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        });
    },5000) 
