import React, {Component} from "react"
import PropsType from "prop-types"
import Article from "./index"
import Accordion from "../../decorators/toggleAccordion"
import {connect} from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropsType.array.isRequired,
        //from accordion
        openId: PropsType.string,
        toggleAccordion: PropsType.func.isRequired
    }

    render() {
        const {articles, openId, toggleAccordion} = this.props
        const articleElements = articles.map(article => <li key = {article.id} >
            <Article
                article = {article}
                isOpen = {article.id === openId}
                toggleAccordion = {toggleAccordion(article.id)}
            />
        </li >)

        return (
            <ul >
                {articleElements}
            </ul >
        )
    }
}

export default connect(state => ({
    articles: state.articles
}))(Accordion(ArticleList))
