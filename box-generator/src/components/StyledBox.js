import styled from 'styled-components';

const StyledBox =  styled.div`
    border: 1px solid white;
    margin: 1rem;
    display: inline-block;
    background: ${props => props.bgColor};
    height: ${props => props.height || '9rem'};
    width: ${props => props.width || '9rem'};
`;

export default StyledBox;