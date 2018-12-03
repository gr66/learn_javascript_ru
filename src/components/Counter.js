import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

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
                {console.log(this.props.count)}
                <h2>{this.props.count}</h2>
                <button onClick = {this.handleIncrement}>Increment</button>
            </div>
        );
    }

    handleIncrement = () => {
        console.log('incrementing')
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

const decorator = connect(mapStateToProps)

export default decorator(Counter)
