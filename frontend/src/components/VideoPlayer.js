import React, { Component } from 'react'
 import './styles/VideoPlayer.scss';

class VideoPlayer extends Component {
    render() {
        return (
            <div className="videoContainer">
            <video className="videoContainer__video" 
            poster="./assets/Images/video-list-0.jpg"
            controls>
             <source src="./assets/Video/video.mp4" type="video/mp4" />
             
          </video> 
                         
            </div>
        )
    }
}

export default VideoPlayer
