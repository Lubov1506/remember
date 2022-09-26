import React, {useState} from 'react';
import StopWatch from '../StopWatch';
import Tracker from '../Tracker';

const Home = () => {
    const [isVisible, setVisibility] = useState(true)
    const handler = ()=>{
        setVisibility(!isVisible)
    }
    return (
        <div>
            <button onClick={handler}>click</button>
            {isVisible && <StopWatch/>}
        </div>
    );
}

export default Home;
