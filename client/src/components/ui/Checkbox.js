import React from 'react'
import styled from 'styled-components'
import check from './check.svg'

const Checkbox = styled.label`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    cursor: pointer;

    input[type='checkbox'] {
        opacity: 0;
        width: 0;
        height: 0;
    }

    input[type='checkbox']:checked + .checkbox {
        background-color: #f2fcff;
        border-color: #2196f3;

        &:after {
            opacity: 1;
        }
    }

    input[type='checkbox']:focus + .checkbox {
        border-color: #2196f3;
    }

    .checkbox {
        width: 19px;
        min-width: 19px;
        height: 19px;
        border-radius: 2px;
        border: 1px solid #d2d5d6;
        margin-right: 10px;
        background-color: #fff;
        position: relative;
        transition: background-color 0.2s;

        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 5px;
            left: 4px;
            background: url(${check}) no-repeat center center;
            width: 9px;
            height: 7px;
            opacity: 0;
            transition: opacity 0.2s;
        }
    }

    span {
        font-size: 13px;
        color: #4a4a4a;
    }
`

export default ({ value = false, onChange = () => {}, title = '', name }) => (
    <Checkbox>
        <input type="checkbox" name={name} checked={value} onChange={e => onChange(e, !value)} />
        <div className="checkbox" />
        <span>{title}</span>
    </Checkbox>
)
