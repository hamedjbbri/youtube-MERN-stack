import React, { Component } from 'react'
import './styles/CommentItem.scss'


class CommentItem extends Component {
    render() {

        const { comment, id, likes, name, timestamp } = this.props.item

        return (
            <div className="commentItem">
                <div className="commentItem__left"> 
                <span className="commentItem__left--avatar"> </span>
                </div>
                <div className="commentItem__middle">
                 
                <div> <span className="commentItem__middle--name">{name}</span>
                     <span className="commentItem__middle--date">{timestamp}</span></div>

                 <p> {comment}  </p>
                 </div>
                
                <div className="commentItem__right">
                    <span className="commentItem__right--delete"><i className="fa fa-trash"></i></span>
                </div>
            </div>
        )
    }
}

export default CommentItem
