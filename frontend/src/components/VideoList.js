import React, { Component } from 'react'
import './styles/VideoList.scss';
import VideoItem from './VideoItem';

export default class VideoList extends Component {
    render() {
        return (
            <div className="videoList">
            <h3 >NEXT VIDEO</h3>
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
           
            
            </div>
        )
    }
}
