import React from 'react';
import styled from 'styled-components'

//StyledBox es el componente, para cambiar las propiedades dinámicamente
//funcion de devolución de llamada que toma los accesorios del componente y devuelve el valor deseado 
const StyledBox = styled.div`
    border: 1px solid lightgray;
    background: ${props => props.bgColor};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
`;

export default StyledBox;
