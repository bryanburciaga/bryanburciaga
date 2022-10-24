import React from 'react';
import '../App.css';
import {  ButtonStart } from './ButtonStart';
import './VideoSection.css';

function VideoSection() {
  return (
    <div className="video-container">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>Welcome to Bryan Burciaga's Website</h1>
        <div className="video-btns">
            <ButtonStart
             className='btns' 
             buttonStyle='btn--outline'
             buttonSize='btn--large'
             >Start
             </ButtonStart>
        </div>
    </div>
  )
}

export default VideoSection;