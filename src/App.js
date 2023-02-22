import React, { useSate } from 'react'
import './App.css';
import UserIcon from './img/Group 9681@3x.png'
import InterviewIcon from './img/interview@3x.png'
import ExperienceIcon from './img/experience@2x.png'
import Levelfirt from './img/below a@2x.png'
import Levelsecond from './img/below b@2x.png'
import LevelThird from './img/below c@2x.png'
import LevelForth from './img/below d@2x.png'



function App() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="App">
      <div className='Interview-score-upper-cont'>
        <img src={InterviewIcon} style={{ 'height': '5vh' }} />
        <label className='interview-score-text'>Interview Score Details</label>
      </div>

      <div className="profile-Container">
        <div className="left-container">

          <div ><img src={UserIcon} className="profile-user-icon" /></div>
          <div className="middle-container-user-details">
            <label className="middle-container-username">Salar Ahmed</label>
            <div className="middle-container-role">
              <label >Position: Sales Manager</label>
            </div>
          </div>

        </div>
        <div className="right-container">
          <div className="right-container-img">
            <img src={ExperienceIcon} style={{ 'width': '60%' }} />
          </div>
          <div>
            <label className="right-container-text">Banking Experience :
              <span className="right-container-span">4yrs</span></label>
            <label className="right-container-text">Total Experience :
              <span className="right-container-span">8yrs</span></label>
          </div>

        </div>
      </div>
      <div className='interview-mail-body'>
        <label className='competency-text'>Competency Scoring</label>
      </div>

      <div className='interview-mail-upper-body'>
        <label className='level-upper-text'>Rank the candidate on four levels scale ranging from 1-4 according to following criteria</label>
    
          <div className='interview-score-select'>
            <div className='level-cont'>
              <img src={Levelfirt} style={{'height':'5vh'}}/>
              <label className='level-text'>Basic</label>
            </div>
            <div className='level-cont'>
              <img src={Levelsecond} style={{'height':'5vh'}}/>
              <label className='level-text'>Intermediate</label>
            </div>
            <div className='level-cont'>
              <img src={LevelThird} style={{'height':'5vh'}}/>
              <label className='level-text'>Advanced</label>
            </div>
            <div className='level-cont'>
              <img src={LevelForth} style={{'height':'5vh'}}/>
              <label className='level-text'>Expert   </label>
            </div>
          </div>
        </div>
      </div>
      );
}

      export default App;
