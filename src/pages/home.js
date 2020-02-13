import React, { Component } from 'react'
import { TermSelect, PriceChart } from './../components'
import { Typography } from '@material-ui/core'

class Home extends Component {

    render() {
        return (
            <div>
                <Typography variant='h3'>DDR4 RAM Price Tracker</Typography>
                <TermSelect />
                <PriceChart />
                <hr />
                <p>
                    개발자는 삼성전자, 도/소매점 등과는 아무런 관계가 없으며,<br />
                    소비자로서 하루에도 몇번씩 바뀌는 메모리 가격 추이를 그래프로 보고싶어서 만든 페이지입니다.<br />
                    본 사이트를 이용/신뢰함으로써 발생하는 모든 문제에 대해 개발자는 책임지지 않습니다.<br />
                    <br />
                    Developed by <a href="https://github.com/rocky112358"><u>rocky112358 (Dongmin Kim)</u></a>
                </p>
            </div>
        )
    }
}

export default Home