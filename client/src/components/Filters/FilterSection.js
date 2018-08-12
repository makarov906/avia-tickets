import React from 'react';
import styled from 'styled-components';

const FilterSection = styled.div`
    margin-bottom: 32px;

    &:last-child {
        margin-bottom: 0;
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

export default ({ title, children }) => (
    <FilterSection>
        <Title>{title}</Title>
        {children}
    </FilterSection>
)
