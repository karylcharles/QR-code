import React, { Component } from 'react';
import './QrText.scss';

class QrText extends Component{
    render(){
        return(
            <div className='QrText'>
                <h3>Improve your front-end skills by building projects</h3>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        );
    }
}

export default QrText;