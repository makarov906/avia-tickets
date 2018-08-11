import React, { Component } from 'react'
import styled from 'styled-components'
import Checkbox from './ui/Checkbox'
import Button from './ui/Button'

const Filters = styled.div`
    min-width: 232px;
    background-color: #fff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
    padding: 17px 15px 13px;
    align-self: flex-start;
`

const FilterItem = styled.div`
    height: 36px;
    margin: 0 -15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position:relative;

    label {
      padding: 0 15px;
    }

    &:hover {
        background-color: #f1fcff;

        a {
            opacity: 1;
        }
    }

    a {
        opacity: 0;
        color: #2196f3;
        font-size: 11px;
        letter-spacing: 0.5px;
        font-weight: bold;
        text-transform: uppercase;
        transition: opacity 0.2s;
        position:absolute;
        right: 15px;
    }
`

const Title = styled.h2`
    font-weight: bold;
    font-size: 12px;
    color: #4a4a4a;
    letter-spacing: 0.5px;
    margin: 0 0 10px;
    text-transform: uppercase;
`

const ButtonContainer = styled.div`
    display: flex;

    button {
        flex-grow: 1;

        &:not(:first-child) {
            margin-left: -1px;
        }

        &:first-child {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }

        &:last-child {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
`

const Block = styled.div`
    margin-bottom: ${props => !props.last && '32px'};
`

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
        }
    }

    onChange = (e, checked) => {
        console.log(checked)
        this.setState({
            checked,
        })
    }

    render() {
        return (
            <Filters>
                <Block>
                    <Title>Валюта</Title>
                    <ButtonContainer>
                        <Button active>rub</Button>
                        <Button>usd</Button>
                        <Button>eur</Button>
                    </ButtonContainer>
                </Block>
                <Block last>
                    <Title>Количество пересадок</Title>
                    <FilterItem>
                        <Checkbox title="Все" value={this.state.checked} onChange={this.onChange} />
                    </FilterItem>
                    <FilterItem>
                        <Checkbox title="Без пересадок" value={this.state.checked} onChange={this.onChange} />
                        <a>Только</a>
                    </FilterItem>
                    <FilterItem>
                        <Checkbox title="1 пересадка" value={this.state.checked} onChange={this.onChange} />
                        <a>Только</a>
                    </FilterItem>
                    <FilterItem>
                        <Checkbox title="2 пересадки" value={this.state.checked} onChange={this.onChange} />
                        <a>Только</a>
                    </FilterItem>
                    <FilterItem>
                        <Checkbox title="3 пересадки" value={this.state.checked} onChange={this.onChange} />
                        <a>Только</a>
                    </FilterItem>
                </Block>
            </Filters>
        )
    }
}
