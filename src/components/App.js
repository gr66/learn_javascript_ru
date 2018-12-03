import React, {Component} from "react";
import ArticleList from "./Article/List"
import ArticleChart from "./Article/Chart"
import UserForm from "./UserForm"
import Select from "react-select"
import DayPickerForm from "./Filters/DayPickerForm"


class App extends Component {
    state = {
        selection: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <UserForm />
                <DayPickerForm />
                <Select options = {options}
                        value = {this.state.selection}
                        onChange = {this.changeSelection}
                        isMulti />
                <ArticleList articles = {this.props.articles} />
                <ArticleChart articles = {this.props.articles} />
            </div>
        );
    }

    changeSelection = selection => this.setState({selection})
}

export default App
