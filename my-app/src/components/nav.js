import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="text-center text-white" style={{height: '100px'}}> 
                        Nguyễn Đăng Thanh - B19DCDT219 - JavaScript
                    </h1>
                    <div className="row">
                        <div className="col-sm-12 text-center text-white bgrname bogoc" style={{height: '100px', margin: '10px'}}>
                        <h2 className="text-center">Bảng chỉ số cảm biến</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;