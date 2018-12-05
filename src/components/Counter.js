import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    static defaultProps = {
        // count: PropTypes.number
    }

    static propTypes = {
        count: PropTypes.number
    }

    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <button onClick = {this.handleIncrement}>Increment</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.props.increment()
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}
const mapToDispatch = { increment }
const decorator = connect(mapStateToProps, mapToDispatch)

export default decorator(Counter)
