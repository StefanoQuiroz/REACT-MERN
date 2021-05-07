//import React from 'react'
import styled from 'styled-components'

const StyledBox = styled.div`
    border: 1px solid white;
    display: inline-block;
    margin: 1rem;
    background: ${props => props.bgColor};
    width: ${props => props.width || '8rem'};
    height: ${props => props.height || '8rem'};
`;

export default StyledBox;