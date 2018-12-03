import React, {Component} from 'react';

class ArticleChart extends Component {
    componentDidMount() {
        //work with this.refs.chart
    }

    componentWillReceivProps(nextProps) {
        //update chart for new article
    }

    render() {
        return (
            <div ref = "chart" />
        );
    }

    componentWillUnmount() {
        //claenup
    }
}

export default ArticleChart;
