import React from "react"
import Comment from "./Comment"

export default function CommentsList({comments}) {
    const commentsElement = comments.map(comment => <div key={comment.id}><Comment comment={comment}/></div>)

    return (
        <ul>{commentsElement}</ul>
    )
}
