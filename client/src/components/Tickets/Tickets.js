import React from 'react'
import styled from 'styled-components'
import Ticket from './Ticket'

const TicketsContainer = styled.div`
    flex-basis: 566px;
`

export default ({ tickets, availableStops }) => (
    <TicketsContainer>
        {tickets.map(ticket => availableStops.indexOf(ticket.stops) !== -1 && (
            <Ticket key={ticket.id} ticket={ticket} />
        ))}
    </TicketsContainer>
)
