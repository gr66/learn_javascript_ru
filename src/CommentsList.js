import React, {Component} from "react"
import Comment from "./Comment"

export default class CommentsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {isOpen} = this.state
        return (
            <commentsSection>
                <button onClick={this.toggleOpen}>
                    {isOpen ? "Hide" : "Show"} comments
                </button>
                {this.getComments()}
            </commentsSection>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getComments() {
        if (!this.state.isOpen) return null
        const {comments} = this.props
        if (!comments || !comments.length) return "No comments yet"
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
            </ul>
        )
    }

}
