import React from "react"

export default Component => class Accordion extends React.Component {
    state = {
        openId: null
    }

    render() {
        return <Component {...this.props}
                          openId={this.state.openId}
                          toggleAccordion={this.toggleAccordion}
        />
    }

    toggleAccordion = openId => ev => {
        const id = openId === this.state.openId ? null : openId
        this.setState({
            openId: id
        })
    }
}
