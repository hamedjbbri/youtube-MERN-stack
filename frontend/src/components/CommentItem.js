import React, { Component } from 'react'
import './styles/CommentItem.scss'
import axios from 'axios'

class CommentItem extends Component {
    
    convertTimeStamp = (timestamp) => {
        const myDate = new Date(timestamp);
        return myDate.getFullYear() + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate()  
      }
    
   deleteComment =() => {
     this.props.removeComment(this.props.item.id)
    
   }


 
    render() {

        const { comment, id, likes, name, timestamp } = this.props.item

        return (
            <div className="commentItem">
                <div className="commentItem__left"> 
                <span className="commentItem__left--avatar"> </span>
                </div>
                <div className="commentItem__middle">
                 
                <div> <span className="commentItem__middle--name">{name}</span>
                     <span className="commentItem__middle--date">{this.convertTimeStamp(timestamp)}</span></div>

                 <p> {comment}  </p>
                 </div>
                
                <div className="commentItem__right">
                    <span className="commentItem__right--delete"><i className="fa fa-trash" onClick={this.deleteComment}></i></span>
                </div>
            </div>
        )
    }
}

export default CommentItem
