import React, { Component } from 'react'
import './styles/CommentItem.scss'


class CommentItem extends Component {
    render() {
        return (
            <div className="commentItem">
                <div className="commentItem__left"> 
                <span className="commentItem__left--avatar"> </span>
                </div>
                <div className="commentItem__middle">
                 
                <p> <span className="commentItem__middle--name">Hamed Jabbari</span>
                     <span className="commentItem__middle--date">737 days ago</span>
                     <p> orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,   </p>
                </p>
                 </div>
                
                <div className="commentItem__right">
                    <span className="commentItem__right--delete"><i className="fa fa-trash"></i></span>
                </div>
            </div>
        )
    }
}

export default CommentItem
