import React, { Component } from 'react'
import Filters from './Filters/Filters'
import Tickets from './Tickets/Tickets'
import styled from 'styled-components'
import FilterController from './Filters/FilterController'
import { getStopsCountName, getTickets } from '../utils'

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
`

export default class extends Component {
    state = {
        tickets: [],
        stopsFilters: [{ name: 'Все', value: 'all', checked: false }],
        currency: 'rub',
    }

    componentDidMount() {
        getTickets().then(tickets => {
            this.setState(prevState => ({
                tickets: tickets.map((ticket, idx) => ({
                    ...ticket,
                    id: idx,
                })),
                stopsFilters: prevState.stopsFilters.concat(
                    tickets
                        .map(ticket => ticket.stops)
                        .filter((count, idx, arr) => arr.indexOf(count) === idx)
                        .sort()
                        .map(count => ({
                            name: getStopsCountName(count),
                            value: count,
                            checked: false,
                        })),
                ),
            }))
        })
    }

    onChangeCurrency = name => {
        this.setState({
            currency: name,
        })
    }

    onChangeCheckbox = (item, only = false) => {
        this.setState(prevState => ({
            stopsFilters: FilterController.toggle(prevState.stopsFilters, item, only),
        }))
    }

    render() {
        const { tickets, stopsFilters, currency } = this.state

        return (
            <Layout>
                <Filters
                    currency={currency}
                    onChangeCurrency={this.onChangeCurrency}
                    checkboxes={stopsFilters}
                    onChangeCheckbox={this.onChangeCheckbox}
                />
                <Tickets tickets={tickets} />
            </Layout>
        )
    }
}
