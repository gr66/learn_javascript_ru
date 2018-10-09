import React, {Component} from 'react'
import PropTypes from "prop-types"
import CommentsList from "./CommentsList"

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        })
    }
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
