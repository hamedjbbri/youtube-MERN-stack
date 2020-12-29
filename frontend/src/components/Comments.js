import React, { Component } from 'react'
import './styles/Comments.scss'
import CommentItem from './CommentItem';
 

export default class Comments extends Component {
    render() {

        const { comments , id } = this.props.oneVideo

        const passedComments = comments || []

        const commentJSX = passedComments.map(item =>  <CommentItem key={item.id} item = {item} removeComment={this.props.removeComment} />)
     
       

        return (
            <div className="comments">
            <p>
            <b><span className="comments__count"> {passedComments.length} </span></b>
             comments</p>

             <div className="comments__input">
             <form> <img src="../assets/images/Mohan-muruge.jpg" alt="avatar" className="comments__input--avatar" />
               
                <input type="text" className="comments__input--input" />
                <button className="comments__input--btn">Comment</button>
             
             </form>
               </div>
               {commentJSX}
          
            </div>
        )
    }
}
