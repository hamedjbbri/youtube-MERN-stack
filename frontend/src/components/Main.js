import VideoPlayer from './VideoPlayer';
import Content from './Content'; 
import React, { Component } from 'react'
import axios from 'axios';


export default class Main extends Component {
       
       state={
           oneVideo: {}
       }


      componentDidUpdate(){
             const id = this.props.match.params.id;

             axios.get(`http://localhost:8080/videos/${id}`)
             .then(res => {
                 this.setState({
                     oneVideo: res.data
                 })
             })
      }

    render() {
        return (
            <div>
            <VideoPlayer />
            <Content />
            </div>
        )
    }
}

