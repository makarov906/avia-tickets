import React from 'react'
import styled from 'styled-components'
import { currency } from '../../utils'
import Button from '../ui/Button'

const ButtonContainer = styled.div`
    display: flex;

    button {
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

export default ({ currentCurrency, onChangeCurrency }) => (
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
)
