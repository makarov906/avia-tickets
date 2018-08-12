import React from 'react'
import Logo from './Logo'
import styled from 'styled-components'
import Layout from './Layout'
import { breakpoint } from '../utils'

const Container = styled.div`
    width: ${breakpoint.screen};
    padding: 0 10px;
    margin: 0 auto;

    @media screen and (max-width: ${breakpoint.screen}) {
        width: 100%;
    }
`

export default () => (
    <Container>
        <Logo />
        <Layout />
    </Container>
)
