import React from "react"
import PropTypes from "prop-types"

function Comment({comment}) {
    return (
        <p><b>{comment.user} :</b> {comment.text}</p>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })

}
export default Comment
