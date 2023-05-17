import React from 'react'
import Comment from './Comment.js' 

export default function CommentList(props){
    const { comment } = props

    return (
        <div className='issue-list'>
            { comment.map(comment => <Comment {...Comment} key={comment._id}/>) }
        </div>
    )
}