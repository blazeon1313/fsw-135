import React, { useContext } from 'react'
import IssueForm from './IssuesForm.js'
import IssueList from './IssuesList'
import { UserContext } from '../context/UserProvider.js'
import Issue from './Issues.js'
import CommentForm from './CommentForm.js'

export default function Profile(){
    const {
        user: { username },
        addIssue,
        issues,
        addComment
    } = useContext(UserContext)
   
    return(
        <div className='profile'>
            <h1>Welcome {username}!</h1>
            <h3>Add an Issue</h3>
            <IssueForm addIssue={addIssue}/>
            <h3>Your Issues</h3>
            <IssueList issues={issues}/>
            <Issue>
            <CommentForm addComment={addComment}/>
            </Issue>
        </div>
    )
}