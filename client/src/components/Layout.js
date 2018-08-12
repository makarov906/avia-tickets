import React, { Component } from 'react'
import Filters from './Filters/Filters'
import Tickets from './Tickets/Tickets'
import styled from 'styled-components'
import FilterController from './Filters/FilterController'

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
`

function getName(stopsCount) {
    if (stopsCount === 0) {
        return 'Без пересадок'
    }

    const lastTwoNumbers = stopsCount % 10
    if (lastTwoNumbers > 10 && lastTwoNumbers < 20) {
        return `${stopsCount} пересадок`
    }

    const last = stopsCount % 10
    switch (last) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return `${stopsCount} пересадок`
        case 1:
            return `${stopsCount} пересадка`
        case 2:
        case 3:
        case 4:
            return `${stopsCount} пересадки`
    }
}

export default class extends Component {
    state = {
        tickets: [{ id: 1, carrier: 'TK' }, { id: 2, carrier: 'S7' }, { id: 3, carrier: 'SU' }],
        transfers: [{ name: 'Все', value: 'all', checked: false }].concat(
            [0, 1, 2, 3].map(stopsCount => ({
                name: getName(stopsCount),
                value: stopsCount.toString(),
                checked: false,
            })),
        ),
        currency: 'rub',
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/tickets')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    tickets: res.tickets.map((ticket, idx) => ({
                        ...ticket,
                        id: idx
                    }))
                })
            })
    }

    onChangeCurrency = name => {
        this.setState({
            currency: name,
        })
    }

    onChangeCheckbox = (item, only = false) => {
        this.setState(prevState => ({
            ...prevState,
            transfers: FilterController.toggle(prevState.transfers, item, only),
        }))
    }

    render() {
        const { tickets, transfers, currency } = this.state

        return (
            <Layout>
                <Filters
                    currency={currency}
                    onChangeCurrency={this.onChangeCurrency}
                    values={transfers}
                    onChangeCheckbox={this.onChangeCheckbox}
                />
                <Tickets tickets={tickets} />
            </Layout>
        )
    }
}
