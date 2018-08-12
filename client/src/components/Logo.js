import React from 'react'
import styled from 'styled-components'
import logo from './logo.png'

const Logo = styled.div`
    text-align: center;
    margin: 50px 0;
`

export default () => (
    <Logo>
        <img width="60px" height="60px" src={logo} alt="logo" />
    </Logo>
)
