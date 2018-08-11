import React from 'react'
import styled from 'styled-components'
import Ticket from './Ticket'

const TicketsContainer = styled.div``

export default ({ tickets }) => (
    <TicketsContainer>
        {tickets.map(ticket => (
            <Ticket key={ticket.id} ticket={ticket} />
        ))}
    </TicketsContainer>
)
