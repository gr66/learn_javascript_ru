import React, {Component} from "react"
import DayPicker, {DateUtils} from "react-day-picker"
import "react-day-picker/lib/style.css"
import "./DayPickerForm.css"

class DayPickerForm extends Component {
    static defaultProps = {
        numberOfMonths: 1,
    };

    constructor(props) {
        super(props)
        this.state = this.getInitialState()
    }

    getInitialState = () => {
        return {
            from: null,
            to: null
        }
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick = () => {
        this.setState(this.getInitialState());
    }

    render() {
        const {from, to} = this.state;
        const modifiers = {start: from, end: to};
        return (
            <div className = "Rangeg">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className = "link" onClick = {this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className = "Selectable"
                    numberOfMonths = {this.props.numberOfMonths}
                    selectedDays = {[from, {from, to}]}
                    modifiers = {modifiers}
                    onDayClick = {this.handleDayClick}
                    fixedWeeks
                />
            </div>
        )
    }
}

export default DayPickerForm
