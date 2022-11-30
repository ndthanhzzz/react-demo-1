import React, { Component } from 'react';

class Data extends Component {
    render() {
        return (
            <div>
                <div className="row text-center text-dark">
                    <div className="col-sm-4" style={{height: '100px', textAlign: 'center', fontSize: '25px'}}>
                        <div className="bogoc" id="Temp" style={{backgroundColor: 'red', fontWeight: 500}}> Đang lấy dữ liệu lần đầu... </div>
                    </div>
                    <div className="col-sm-4" style={{height: '100px', textAlign: 'center', fontSize: '25px'}}>
                        <p className="bogoc" id="Hum" style={{backgroundColor: '#3399ff', fontWeight: 500}}> Đang lấy dữ liệu lần đầu... </p>
                    </div>
                    <div className="col-sm-4" style={{height: '100px', textAlign: 'center', fontSize: '25px'}}>
                        <p className="bogoc" id="Light" style={{backgroundColor: '#ffff00', fontWeight: 500}}> Lấy dữ liệu lần đầu...</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Data;