import React, {Component} from "react"
import Article from "./Article"

export default class ArticleList extends Component {
    state = {
        openArticleId: null
    }

    render() {
        const articleElements = this.props.articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === this.state.openArticleId}
                toggleOpen = {this.toggleOpenArticle(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle = openArticleId => ev => {
        const articleId = openArticleId === this.state.openArticleId ? null : openArticleId
        this.setState({
            openArticleId: articleId
        })
    }
}
