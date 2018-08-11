import React, { Component } from 'react'
import Filters from './Filters'
import Tickets from './Tickets'
import styled from 'styled-components'

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
`

export default class extends Component {
    state = {
        tickets: [{ id: 1 }, { id: 2 }, { id: 3 }],
    }

    componentDidMount() {}

    render() {
        const { tickets } = this.state

        return (
            <Layout>
                <Filters />
                <Tickets tickets={tickets} />
            </Layout>
        )
    }
}
