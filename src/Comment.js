import React from "react"

export default function Comment({comment}) {
    return (
        <p><b>{comment.user} :</b> {comment.text}</p>
    )
}
