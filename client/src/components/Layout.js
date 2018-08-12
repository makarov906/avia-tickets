import React, { Component } from 'react'
import Filters from './Filters/Filters'
import Tickets from './Tickets/Tickets'
import styled from 'styled-components'
import FilterController from './Filters/FilterController'
import { getStopsCountName, getTickets, getExchangeCourse, currency, breakpoint } from '../utils'

const Layout = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${breakpoint.screen}) {
        flex-direction: column;
    }
`

const TicketsContainer = styled.div`
    flex-basis: 566px;
    width: 100%;
`

const FiltersContainer = styled.div`
    flex-basis: 232px;
    width: 100%;

    @media screen and (max-width: ${breakpoint.screen}) {
        margin-bottom: 20px;
        flex-basis: 0;
    }
`

export default class extends Component {
    state = {
        tickets: [],
        stopsFilters: [{ name: 'Все', value: 'all', checked: true }],
        currentCurrency: currency.rub,
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
                            checked: true,
                        })),
                ),
            }))
        })
    }

    onChangeCurrency = currencyName => {
        if (currencyName !== this.state.currentCurrency) {
            this.setState({
                currentCurrency: currencyName,
            })
            getExchangeCourse(this.state.currentCurrency, currencyName).then(course => {
                this.setState(prevState => ({
                    tickets: prevState.tickets.map(ticket => ({
                        ...ticket,
                        price: ticket.price * course,
                    })),
                }))
            })
        }
    }

    onChangeCheckbox = (checkbox, uncheckOther = false) => {
        if (uncheckOther) {
            this.uncheckAllExcept(checkbox)
        } else {
            this.setState(prevState => ({
                stopsFilters: FilterController.toggle(prevState.stopsFilters, checkbox),
            }))
        }
    }

    uncheckAllExcept(checkbox) {
        this.setState(prevState => ({
            stopsFilters: prevState.stopsFilters.map(
                cb =>
                    cb.value === checkbox.value
                        ? {
                              ...cb,
                              checked: true,
                          }
                        : {
                              ...cb,
                              checked: false,
                          },
            ),
        }))
    }

    render() {
        const { tickets, stopsFilters, currentCurrency } = this.state
        const availableStops = stopsFilters.filter(cb => cb.checked).map(cb => cb.value)

        return (
            <Layout>
                <FiltersContainer>
                    <Filters
                        currentCurrency={currentCurrency}
                        onChangeCurrency={this.onChangeCurrency}
                        checkboxes={stopsFilters}
                        onChangeCheckbox={this.onChangeCheckbox}
                    />
                </FiltersContainer>
                <TicketsContainer>
                    <Tickets availableStops={availableStops} tickets={tickets} />
                </TicketsContainer>
            </Layout>
        )
    }
}
