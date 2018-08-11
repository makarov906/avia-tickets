import React from 'react'
import Logo from './Logo'
import styled from 'styled-components'
import Layout from './Layout'

const Container = styled.div`
    width: 818px;
    margin: 0 auto;
`

export default () => (
    <Container>
        <Logo />
        <Layout />
    </Container>
)
