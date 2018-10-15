import React, {Component} from 'react'
import PropTypes from "prop-types"
import CommentsList from "./CommentsList"

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }),
        isOpen: PropTypes.bool,
        toggleAccordion: PropTypes.func.isRequired
    }

    componentWillReceivProps() {
        console.log("----", "updateing", this.props.isOpen, nextProps.isOpen)
    }

    componentWillMount() {
        console.log("---", "mounting")
    }

    render() {
        const {article, isOpen, toggleAccordion} = this.props

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleAccordion}>
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
