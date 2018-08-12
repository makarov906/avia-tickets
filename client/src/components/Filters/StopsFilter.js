import React, { Fragment } from 'react'
import styled from 'styled-components'
import Checkbox from '../ui/Checkbox'

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

export default ({ checkboxes, onChangeCheckbox }) => (
    <Fragment>
        {checkboxes.map(checkbox => (
            <FilterItem key={checkbox.value}>
                <Checkbox title={checkbox.name} value={checkbox.checked} onChange={() => onChangeCheckbox(checkbox)} />
                {checkbox.value !== 'all' && <a onClick={() => onChangeCheckbox(checkbox, true)}>Только</a>}
            </FilterItem>
        ))}
    </Fragment>
)
