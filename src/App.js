import React from 'react';
import './App.css';
import Switcher from './components/Switcher';
import smile from './components/Switcher/smile.png';
import sad from './components/Switcher/sad.png';
import GreenCircle from './components/GreenCircle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      mood: true,
      moodText: 'smile'
    }
  }
  clickHandler = () =>{
    this.setState({
        mood: !this.state.mood,
        moodText: this.state.moodText==='smile' ? 'sad' : 'smile'
    })
    this.changeBgc()
}
  changeBgc = () =>{
    this.setState({
      bgc: this.state.bgc === 'smile' ? 'sad' : 'smile'
    })
  }
  render(){

    const {moodText, mood}=this.state
    const moodPix = mood ? smile : sad
  return (
   <div className={moodText}>
   <Switcher mood={mood} moodText={moodText} moodPix={moodPix} bgColor={moodText} changeBgc={this.clickHandler}/>
   <GreenCircle moodText={moodText}/>
   </div>
  );    
  }

}

export default App;
