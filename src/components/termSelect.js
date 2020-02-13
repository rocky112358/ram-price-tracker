import React, { Component } from 'react'
import { Button, ButtonGroup } from '@material-ui/core'

class TermSelect extends Component {

    render() {
        return (
            <div>
                <ButtonGroup variant="text" color="primary" aria-label="large outlined primary button group">
                    <Button>4H</Button>
                    <Button>12H</Button>
                    <Button>1D</Button>
                    <Button>7D</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default TermSelect
