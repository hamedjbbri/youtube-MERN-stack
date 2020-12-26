import React, { Component } from 'react'
import './styles/VideoItem.scss';

export default class VideoItem extends Component {
    render() {
        return (
            <div className="videoItem">
                <div className="videoItem__left">
                  <img src="./assets/Images/video-list-0.jpg" width="100%" height="100%" />
                </div>
             
                <div className="videoItem__right">
                     <p className="videoItem__right--title">title </p>
                     <p className="videoItem__right--publisher">publisher</p>
                </div>
            </div>
        )
    }
}
