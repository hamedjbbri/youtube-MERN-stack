import React, { Component } from 'react'
import './styles/VideoDescription.scss';

export default class VideoDescription extends Component {
    
  convertTimeStamp = (timestamp) => {
    const myDate = new Date(timestamp);
    return myDate.getFullYear() + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate() 
  
    
  }
  

  render() {


       

        const {channel, comments, description, duration, id, image, likes, timestamp, title, views} = this.props.oneVideo


        return (
            <div className="videoDescription">
            <h1><strong>{title}</strong></h1> 
             
              <div className="videoDescription__details" >
                <div className="videoDescription__details--left">
                  <span><b>{channel}</b></span>
                  <span>{this.convertTimeStamp(timestamp)}</span>
                </div>

                <div className="videoDescription__details--right">
                   <img src="../assets/Icons/SVG/Icon-views.svg" alt="views" /><span className="videoDescription__details--rightviews">{views}</span>
                   <img src="../assets/Icons/SVG/Icon-likes.svg" alt="likes" /><span>{likes}</span>
                </div>
              </div>

              <p>
               {description}
              </p>
            </div>
        )
    }
}
