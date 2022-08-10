import React from 'react';
import './GreenCircle.css'

const GreenCircle = (props) => {
    return (
        <div className='green-circle'>
            Component Swither is {props.moodText} now
        </div>
    );
}

export default GreenCircle;
