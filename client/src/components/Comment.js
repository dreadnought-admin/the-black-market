import React, { useState, useEffect } from 'react'
import { UserMenu } from 'react-admin'

const Comment = ({ comment, currentUser, setcomments }) => {

  
    const [shownComment, setShownComment] = useState(comment)
  
    useEffect(() => {
        fetch(`/comments/${comment.id}`)
        .then(r => r.json())
        .then(commentData => {
          setShownComment(commentData)
        })
      }, [])

      
      if (!comment) return <h2>Loading</h2>

      const { comment_content, user } = shownComment

      if (!shownComment) return <h1>One sec...</h1>
      if (!user) return <h1>Slow down, cowboy!</h1>

    return (
    <div>
      <div>
       
        <img height="50px" width="50px" src={user.avatar}></img>
        <h4>{user.username} commented:</h4>
        <p>{comment_content} </p>
        <break></break>
      </div>
    </div>
  )
}

export default Comment
