import React, {Component} from 'react'
import PropTypes from "prop-types"
import CommentsList from "../Comment/List"
import {CSSTransitionGroup} from "react-transition-group"
import "./style.css"

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
        // console.log("----", "updating", this.props.isOpen, nextProps.isOpen)
    }

    componentWillMount() {
        // console.log("---", "mounting")
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.isOpen !== nextProps.isOpen
    }

    render() {
        // console.log("updating article")
        const {article, isOpen, toggleAccordion} = this.props

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleAccordion}>
                    {isOpen ? '^' : 'Open'}
                </button>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.getBody()}
                </CSSTransitionGroup>
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
                    <CommentsList comments = {article.comments} />
                </div>
            </articleSection>
        )
    }
}
