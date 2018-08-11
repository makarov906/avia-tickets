import React, { Component } from 'react'
import Filters from './Filters'
import Tickets from './Tickets'
import styled from 'styled-components'

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
`

const companyLogo = (carrier, width = 120, height = 50) => `http://pics.avs.io/${width}/${height}/${carrier}.png`

export default class extends Component {
    state = {
        tickets: [{ id: 1, carrier: 'TK' }, { id: 2, carrier: 'S7' }, { id: 3, carrier: 'SU' }],
    }

    componentDidMount() {
        this.setState({
            tickets: this.state.tickets.map(t => ({
                ...t,
                logo: companyLogo(t.carrier),
            })),
        })
    }

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
