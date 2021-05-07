import React, {useState, useRef} from 'react';
import StyledBox from './StyledBox'
const BoxGenerator = () => {
    const colorCampo = useRef();
    const alturaCampo = useRef();
    const anchoCampo = useRef();
    const [state, setState] = useState({
        boxes: [],
        newColor: "",
        newWidth: 0
    })

    //Methods
    const onChange = (e) => {
        e.preventDefault();
        const value =e.target.value;
        const name = e.target.value;
        //[name]: value
        setState({
            ...state,
            [name] : value

        })
    }    
    
    const onSubmit = (e) => {
        e.preventDefault();
        setState({
            boxes: [...state.boxes, {color: state.newColor, width: state.newWidth}],
            newColor: "",
            newWidth: 0
        })
        colorCampo.current.value= "";
    }



    return (
        <div>
            <form className="formulario" onSubmit={onSubmit}>
                <label htmlFor="color">Color</label>
                <input type="text" ref={colorCampo} onChange={onChange} name="color"/>
                <label htmlFor="height">Height</label>
                <input type="text" ref={alturaCampo} onChange={onChange} name="height"/>
                <label htmlFor="width">Height</label>
                <input type="text" ref={anchoCampo} onChange={onChange} name="width"/>
                <input type="submit" value="Add"/>
            </form>

            <div className="results">
                <StyledBox/>
            </div>
        </div>
    );
}

export default BoxGenerator;
