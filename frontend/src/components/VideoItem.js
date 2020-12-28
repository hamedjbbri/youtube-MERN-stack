import React, { Component } from 'react'
import './styles/VideoItem.scss';
import {Link} from 'react-router-dom';


export default class VideoItem extends Component {
    render() {

        const {id, title, channel, image } = this.props.item

        return (
            <Link to={`/videos/${id}`}> 
            <div className="videoItem">
                <div className="videoItem__left">
                  <img src={image} width="100%" height="100%" />
                </div>
             
                <div className="videoItem__right">
                     <p className="videoItem__right--title">{title} </p>
                     <p className="videoItem__right--publisher">{channel}</p>
                </div>
            </div>
            </Link>
        )
    }
}
