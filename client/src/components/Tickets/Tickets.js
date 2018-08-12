import React from 'react'
import styled from 'styled-components'
import Ticket from './Ticket'

const TicketsContainer = styled.div`
    flex-basis: 566px;
`

export default ({ tickets }) => (
    <TicketsContainer>
        {tickets.map(ticket => (
            <Ticket key={ticket.id} ticket={ticket} />
        ))}
    </TicketsContainer>
)
