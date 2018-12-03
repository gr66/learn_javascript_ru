import React, {Component} from 'react';
import './form.css'

class CommentForm extends Component {
    state = {
        text: "",
        user: "",
        addedComment: false
    }

    render() {
        const added = this.state.addedComment
        const commentBody = (
            <form>
                Name: <input type = 'text'
                             value = {this.state.user}
                             onChange = {this.handleUserChange}

                             className = {this.userValid() ? 'username-valid' : 'username-invalid'} />
                Text: <textarea type = 'text'
                                value = {this.state.text}
                                onChange = {this.handleTextChange}
                                className = {this.commentValid() ? 'comment-valid' : 'comment-invalid'} />
            </form>
        )
        return (
            <div>
                <button onClick = {this.handleAdd}>
                    {added ? "Delete comment" : "Add comment"}
                </button>
                {added ? commentBody : ""}
            </div>
        );
    }

    userValid = () => {
        const length = this.state.user.length
        return (length >= 5 && length <= 15)
    }

    commentValid = () => {
        const length = this.state.text.length
        return (length >= 20 && length <= 50)
    }

    handleUserChange = ev => {
        this.setState({
            user: ev.target.value
        })
    }

    handleTextChange = ev => {
        this.setState({
            text: ev.target.value
        })
    }

    handleAdd = () => {
        this.setState({
            addedComment: !this.state.addedComment
        })
    }
}

export default CommentForm
