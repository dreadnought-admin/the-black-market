import React, { useState }from 'react'

const CommentForm = ({ recordId, currentUser, comments, setComments }) => {
  
  const [showCommentForm, setShowCommentForm] = useState(false)

  const toggleCommentForm = () => {
    setShowCommentForm(!showCommentForm)
  }

  const numberOpts = (max) => {
    const numArray = []
    for (let i=0; i<max; i++) {
      numArray.push(
        <option value = {i}>{i}</option>
      )
    }
    return numArray
  }
  
  const newComment = {
    comment_content: "",
    user_id: currentUser.id,
    record_id: recordId
  }

  const [ formData, setFormData ] = useState(newComment)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

const handleSubmit = (e) => {
  fetch(`/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  })
  .then((r) => r.json())
  .then((newComment) => {
    setFormData(newComment)
    setShowCommentForm(false)
  })
}




  return (
    <div>
      {(!showCommentForm) ? (
        <button className="button" onClick={() => toggleCommentForm()}>Leave a Comment</button>
      ) : (
        <>
        <button className="button" onClick={() => toggleCommentForm()}>Hide Comment Form</button>
        <p>Leave your comment below!</p>
        <form onSubmit={handleSubmit}>
          <label>what do you think</label>
          <textarea
            name="comment_content"
            id="comment_box"
            rows="5"
            cols="5"
            value={formData.comment_content}
            onChange={(e) => {handleChange(e)}}
            ></textarea>
            <br></br>
            <button type="submit">go head</button>
        </form>
        </>
      )}
    </div>
  )
}

export default CommentForm
