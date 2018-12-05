import React, {Component} from "react";
import ArticleList from "./Article/List"
import ArticleChart from "./Article/Chart"
import UserForm from "./UserForm"
import Select from "react-select"
import DayPickerForm from "./Filters/DayPickerForm"
import Counter from './Counter'

class App extends Component {
    render() {
        return (
            <div>
                <Counter />
                <UserForm />
                <DayPickerForm />
                <ArticleList />
            </div>
        );
    }

    changeSelection = selection => this.setState({selection})
}

export default App
