import React, { Component } from 'react'
import { createChart } from 'lightweight-charts'

class PriceChart extends Component {

    static defaultProps = {
        containerId: 'lightweight_chart_container',
    };

    state = {
        default_series: [],
        seven_datys_series: []
    }

    chart = null
    componentDidMount() {

        const chart = createChart("aa", { width: 800, height: 600 })
        this.chart = chart

        fetch("https://asia-northeast1-ram-price-tracker.cloudfunctions.net/update_series", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mode: "default"
            })
        }).then(response => response.json()).then(data => {
            console.log(data.series)
            this.setState({ default_series: data.series })
        }).then(() => {
            const lineSeries0 = chart.addLineSeries();
            lineSeries0.setData(this.state.default_series[0]['data'].map(s => ({ time: s.x, value: s.y })))

            const lineSeries1 = chart.addLineSeries();
            lineSeries1.setData(this.state.default_series[1]['data'].map(s => ({ time: s.x, value: s.y })))
            const curDate = new Date()
            console.log(this.state.default_series[0]['data'].map(s => ({ time: s.x, value: s.y })))
            chart.timeScale().setVisibleRange({
                from: new Date(curDate).setHours(curDate.getHours() - 4),
                to: new Date(curDate).setHours(curDate.getHours())
            });
        })
    }

    componentWillUnmount() {
        if (this.chart !== null) {
            this.chart.remove();
            this.chart = null
        }
    }

    render() {
        return (
            <div id='aa' />
        );
    }
}

export default PriceChart
