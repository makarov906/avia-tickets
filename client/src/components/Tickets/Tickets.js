import React, { Fragment } from 'react'
import Ticket from './Ticket'

export default ({ tickets, availableStops }) => (
    <Fragment>
        {tickets.map(
            ticket => availableStops.indexOf(ticket.stops) !== -1 && <Ticket key={ticket.id} ticket={ticket} />,
        )}
    </Fragment>
)
