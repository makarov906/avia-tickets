import React, { Component } from 'react'
import styled from 'styled-components'
import Checkbox from '../ui/Checkbox'
import Button from '../ui/Button'
import { currency } from "../../utils";

const Filters = styled.div`
    flex-basis: 232px;
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
    position: relative;

    label {
        padding: 0 15px;
    }

    &:hover {
        background-color: #f1fcff;

        a {
            opacity: 1;
            transform: translateY(0);
            transition: transform 0.1s, opacity 0.1s;
        }
    }

    a {
        opacity: 0;
        color: #2196f3;
        font-size: 11px;
        letter-spacing: 0.5px;
        font-weight: bold;
        text-transform: uppercase;
        position: absolute;
        right: 15px;
        transform: translateY(-10px);
        transition: transform 0.1s, opacity 0.1s;
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

export default ({ checkboxes, onChangeCheckbox, currentCurrency, onChangeCurrency }) => (
    <Filters>
        <Block>
            <Title>Валюта</Title>
            <ButtonContainer>
                <Button onClick={() => onChangeCurrency(currency.rub)} active={currentCurrency === currency.rub}>
                    rub
                </Button>
                <Button onClick={() => onChangeCurrency(currency.usd)} active={currentCurrency === currency.usd}>
                    usd
                </Button>
                <Button onClick={() => onChangeCurrency(currency.eur)} active={currentCurrency === currency.eur}>
                    eur
                </Button>
            </ButtonContainer>
        </Block>
        <Block last>
            <Title>Количество пересадок</Title>
            {checkboxes.map(checkbox => (
                <FilterItem key={checkbox.value}>
                    <Checkbox
                        title={checkbox.name}
                        value={checkbox.checked}
                        onChange={() => onChangeCheckbox(checkbox)}
                    />
                    {checkbox.value !== 'all' && <a onClick={() => onChangeCheckbox(checkbox, true)}>Только</a>}
                </FilterItem>
            ))}
        </Block>
    </Filters>
)
