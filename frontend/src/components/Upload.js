import React, { Component } from 'react';
import './styles/Upload.scss';
import {Link} from 'react-router-dom';

export default class Upload extends Component {
    render() {
        return (
            <div className="upload">
                 <h2>Upload Video</h2> 
                 
                 <div className="upload__video">
                   <div className="upload__video--left">
                   <img src="./assets/Images/video-list-3.jpg" width="100%"/>
                   
                   </div>

                   <div className="upload__video--right">
                    <form>
                       <div>
                           <label htmlFor="title">Title</label>
                           <input type="text" id="title" />
                           </div>
                           <div>
                           <br /> 
                            <label htmlFor="title">Description</label>
                            <textarea id="description" cols="30" rows="5" />
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
