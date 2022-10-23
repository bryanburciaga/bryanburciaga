import React from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoSection.css';

function VideoSection() {
  return (
    <div className="video-container">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>Welcome to Bryan Burciaga Website</h1>
        <div className="video-btns">
            <Button
             className='btns' 
             buttonStyle='btn--outline'
             buttonSize='btn--large'
             >Start
             </Button>
        </div>
    </div>
  )
}

export default VideoSection;