import React, {Component} from 'react'
import CommentsList from "./CommentsList"

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
                <button onClick={this.toggleOpen}>
                    {isOpen ? '^' : 'Open'}
                </button>
                <div>{this.getBody()}</div>
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        const {article} = this.props
        return (
            <articleSection>
                {article.text}
                <div>
                    <CommentsList comments={article.comments}/>
                </div>
            </articleSection>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
