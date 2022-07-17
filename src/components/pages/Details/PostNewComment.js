import React from 'react'
import { CommentContainer, CommentForm, CommentInput, CommentSubmit, H1 } from './PostNewCommentElements'

function PostNewComment() {
  return (
    <>
      <H1>Comments</H1>
      <CommentContainer>
        <CommentForm>
          <CommentInput />
          <CommentSubmit>Submit</CommentSubmit>
        </CommentForm>
      </CommentContainer>
    </>
  )
}

export default PostNewComment