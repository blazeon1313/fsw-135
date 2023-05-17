import React from 'react'

export default function Comment(props){
    const { description } = props
    return (
        <div>
            <h1> { description } </h1>
        </div>
    )
}