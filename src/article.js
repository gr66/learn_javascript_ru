import React, {Component} from 'react'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            isOpenComments: false
        }
    }
    render() {
        const {article} = this.props
        const {isOpen} = this.state

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? '^' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {isOpenComments} = this.state

        const {article} = this.props
        return (
            <articleSection>
                {article.text}
                <div>
                    <button onClick={this.toggleComments}>{isOpenComments ? "Hide" : "Show"} comments</button>
                    {this.getComments(article)}
                </div>
            </articleSection>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleComments = () => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    }

    getComments(article) {
        if (!this.state.isOpenComments || article.comments === undefined) return null
        const commentsElement = article.comments.map(comment => <div key={comment.id}>
            <div>{comment.user}
                <div>- {comment.text}</div>
            </div>
        </div>)

        return (
            <commentsSection>
                {commentsElement}
            </commentsSection>
        )
    }
}
