import React from 'react';
import StyledBox from './StyledBox'
const BoxGenerator = () => {
    return (
        <div>
            <form className="formulario">
                <label htmlFor="color">Color</label>
                <input type="text" />
                <input type="submit" value="Add"/>
            </form>

            <div className="results">
                <StyledBox/>
            </div>
        </div>
    );
}

export default BoxGenerator;
