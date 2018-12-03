import React, {Component} from "react"
import PropsType from "prop-types"
import Article from "./index"
import Accordion from "../../decorators/toggleAccordion"

class ArticleList extends Component {
    static propTypes = {
        articles: PropsType.array.isRequired,
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

export default Accordion(ArticleList)
