import React, { Component } from 'react'
import './styles/Content.scss';
import VideoDescription from './VideoDescription'
import VideoList from './VideoList';
import Comments from './Comments';

export default class Content extends Component {

    render() {
    
    const oneVideo = this.props.oneVideo
        return (
            <div className="content">
            
                <div className="content__left" >
                     <VideoDescription oneVideo={oneVideo} />
                     <Comments oneVideo={oneVideo} removeComment ={this.props.removeComment} />
                </div>
                
                <div className="content__right" >
                <VideoList />
                </div>
            </div>
        )
    }
}
