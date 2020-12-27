import React, { Component } from 'react'
import './styles/Comments.scss'
import CommentItem from './CommentItem';

export default class Comments extends Component {
    render() {
        return (
            <div className="comments">
            <p>
            <b><span className="comments__count">3 </span></b>
             comments</p>

             <div className="comments__input">
               <img src="./assets/images/Mohan-muruge.jpg" className="comments__input--avatar" />
               <input type="text" className="comments__input--input" />
               <button className="comments__input--btn">Comment</button>
             </div>

             <CommentItem />
             <CommentItem />
             <CommentItem />
            </div>
        )
    }
}
