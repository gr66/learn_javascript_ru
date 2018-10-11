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

    render() {
        const {article, isOpen, toggleOpen} = this.props

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? '^' : 'Open'}
                </button>
                <div>{this.getBody()}</div>
            </div>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null

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
}
