import React, {Component} from "react";
import ArticleList from "./Article/List"
import UserForm from "./UserForm"
import DayPickerForm from "./Filters/DayPickerForm"
import Counter from './Counter'
import ArticleSelector from "./Filters/ArticleSelector"

class App extends Component {
    render() {
        return (
            <div>
                <Counter />
                <UserForm />
                <ArticleSelector/>
                <DayPickerForm />
                <ArticleList />
            </div>
        );
    }

    changeSelection = selection => this.setState({selection})
}

export default App
