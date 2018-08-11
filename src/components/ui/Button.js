import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => (props.isActive ? '#2196F3' : '#ffffff')};
    border: 1px solid ${props => (props.isActive ? '#2196F3' : '#d2d5d6')};
    height: 40px;
    width: 100%;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: ${props => (props.isActive ? '#ffffff' : '#2196f3')};
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: ${props => (props.isActive ? '#2196F3' : '#f2fcff')};
        border: 1px solid ${props => (props.isActive ? '#2196F3' : '#64b5f5')};
        z-index: 1;
    }
`

export default ({ active = false, ...props }) => <Button isActive={active} {...props} />
