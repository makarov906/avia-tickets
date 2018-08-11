import React, { Component } from 'react'
import styled from 'styled-components'

const Filters = styled.div`
    width: 232px;
    height: 331px;
    background: #fff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
`

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Filters />
    }
}
