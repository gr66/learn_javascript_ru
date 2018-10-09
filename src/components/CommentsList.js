import React, {Component} from "react"
import toggleOpent from "../decorators/toggleOpen"
import Comment from "./Comment"

class CommentsList extends Component {
    static defaultProps = {
        comments: []
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        return (
            <commentsSection>
                <button onClick={toggleOpen}>
                    {isOpen ? "Hide" : "Show"} comments
                </button>
                {this.getComments()}
            </commentsSection>
        )
    }

    getComments() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        )
    }
}

export default toggleOpent(CommentsList)
