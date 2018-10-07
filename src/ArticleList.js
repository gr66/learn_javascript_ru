import React from "react"
import Article from "./article"

export default function ArticleList(props) {
    var articles = props.articles
    return (
        <ul>
            <li><Article article={articles[0]}/></li>
            <li><Article article={articles[1]}/></li>
            <li><Article article={articles[2]}/></li>
        </ul>
    )
}