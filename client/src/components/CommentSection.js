import React from 'react'
import Comment from './Comment'

const CommentSection = ({ records, currentUser, comments, setComments }) => {


    const currentUserComments = (currentUser) ? (
        comments.filter((comment) => {
          return comment.user_id === currentUser.id
        })
      ) : (
        []
      )

  const otherUserComments = (currentUser) ? (
    comments.filter((comment) => {
        return comment.user_id !== currentUser.id    
    })
  ) : (
    comments
  )

  const commentsArray = (currentUserComments !== []) ? (
    [...currentUserComments, ...otherUserComments]
  ) : (
    otherUserComments
  )

  const commentComponentsUser = commentsArray.map((comment) => {
    return <Comment id={comment.id} comment={comment} currentUser={currentUser} setComments={setComments} />
  })
  const commentComponentsNoUser = commentsArray.map((comment) => {
    return <Comment id={comment.id} comment={comment} setComments={setComments} />
  })


  if (!currentUser) return (
    <div>
        {commentComponentsNoUser}
    </div>
  )
  
    return (
    <div>
    <h1>Here's what people are saying....</h1>
      {commentComponentsUser}
      <h1></h1>
    </div>
  )
}

export default CommentSection
