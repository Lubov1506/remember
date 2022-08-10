import React from 'react';

import './Switcher.css'

function Switcher (props){

        const {moodPix, moodText, changeBgc} = props

        
        const cn = `switcher-container ${moodText}`;

        return (
            <div className={cn}>
                <img src={moodPix}/>
                <h2>I am {moodText}</h2>
                <button onClick={changeBgc}>Click me!</button>
            </div>
        );
    
}

export default Switcher;
