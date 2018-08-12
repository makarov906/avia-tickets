import React from 'react'
import styled from 'styled-components'
import CurrencyFilter from './CurrencyFilter'
import StopsFilter from './StopsFilter'
import FilterSection from './FilterSection'

const Filters = styled.div`
    background-color: #fff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
    padding: 17px 15px 13px;
    align-self: flex-start;
`

export default ({ checkboxes, onChangeCheckbox, currentCurrency, onChangeCurrency }) => (
    <Filters>
        <FilterSection title="Валюта">
            <CurrencyFilter currentCurrency={currentCurrency} onChangeCurrency={onChangeCurrency} />
        </FilterSection>
        <FilterSection title="Количество пересадок">
            <StopsFilter checkboxes={checkboxes} onChangeCheckbox={onChangeCheckbox} />
        </FilterSection>
    </Filters>
)
