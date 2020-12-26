import React, { Component } from 'react'
import './styles/VideoDescription.scss';

export default class VideoDescription extends Component {
    render() {
        return (
            <div className="videoDescription">
            <h1><strong>lorem lorem lorem lorem lorem</strong></h1> 
             
              <div className="videoDescription__details" >
                <div className="videoDescription__details--left">
                  <span><b>Publisher</b></span>
                  <span>737 days ago</span>
                </div>

                <div className="videoDescription__details--right">
                   <img src="./assets/Icons/SVG/Icon-views.svg" /><span className="videoDescription__details--rightviews">1,000,25</span>
                   <img src="./assets/Icons/SVG/Icon-likes.svg" /><span>1399</span>
                </div>
              </div>

              <p>
               lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
              </p>
            </div>
        )
    }
}
