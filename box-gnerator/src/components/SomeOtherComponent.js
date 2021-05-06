import React from 'react';
import StyledBox from './StyledBox';

//No es una funcion
const SomeOtherComponent = () => (
    <div>
        <StyledBox bgColor="Blue"/>
        <StyledBox bgColor="red" hegiht="200px"/>
    </div>
)

export default SomeOtherComponent;