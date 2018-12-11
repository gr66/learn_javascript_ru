import React, {Component} from 'react'
import Select from "react-select"
import {connect} from 'react-redux'


class ArticleSelector extends Component {
    state = {
        selection: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (<Select options={options}
                        value={this.state.selection || "Select asricles"}
                        onChange={this.changeSelection}
                        isMulti/>)

    }

    changeSelection = selection => { this.setState({ selection })
    }
}

export default connect(state => ({
    articles: state.articles
}))(ArticleSelector)
