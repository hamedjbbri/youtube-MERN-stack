import React, { Component } from 'react';
import './styles/Upload.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class Upload extends Component {
    
    addVideo = (e) => {
      e.preventDefault();

     
       
     const title = e.target.title.value ;
     const channel = e.target.channel.value ;

     axios.post('http://localhost:8080/video/add', {
        title: title,
        channel: channel
      })  

      window.location.href = '/'
    }
    
    
    render() {
        return (
            <div className="upload">
                 <h2>Upload Video</h2> 
                 
                 <div className="upload__video">
                   <div className="upload__video--left">
                   <img src="./assets/Images/video-list-3.jpg" width="100%"/>
                   
                   </div>

                   <div className="upload__video--right">
                    <form onSubmit={this.addVideo} >
                       <div>
                           <label htmlFor="title">Title</label>
                           <input type="text" id="title" name="title" />
                           </div>
                           <div>
                           <br /> 
                            <label htmlFor="channel">channel:</label>
                            <textarea id="channel" cols="30" rows="5" name="channel" />
                           </div>
                          
                           <button className="btnpublish">Publish</button>
                           <Link to ="/"><button className="btncancle">Cancle</button></Link>
                    </form>
                   </div>
                 </div>
            </div>
        )
    }
}
