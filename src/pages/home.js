import React, { Component } from 'react'
import { TermSelect, PriceChart, Footer } from './../components'
import { Typography } from '@material-ui/core'

class Home extends Component {

    render() {
        return (
            <div>
                <Typography variant='h3'>DDR4 RAM Price Tracker</Typography>
                <TermSelect />
                <PriceChart />
                <hr />
                <Footer />
            </div>
        )
    }
}

export default Home