import React, {useState, useRef} from 'react';
import StyledBox from './StyledBox'
const BoxGenerator = () => {
    const colorCampo = useRef();
    const alturaCampo = useRef();
    const anchoCampo = useRef();
    const [state, setState] = useState({
        boxes: [],
        newColor: "",
        newWidth: 0,
        newHeight: 0
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
            boxes: [...state.boxes, {color: state.newColor, width: state.newWidth, height: state.newHeight}],
            newColor: "",
            newWidth: 0,
            newHeight: 0
        })
        colorCampo.current.value= "";
        alturaCampo.current.value= 0;
        anchoCampo.current.value= 0
    }



    return (
        <div>
            <form className="formulario" onSubmit={onSubmit}>
                <label htmlFor="color">Color</label>
                <input type="text" ref={colorCampo} onChange={onChange} name="color"/>
                <label htmlFor="height">Height</label>
                <input type="text" ref={alturaCampo} onChange={onChange} name="newHeight"/>
                <label htmlFor="width">Width</label>
                <input type="text" ref={anchoCampo} onChange={onChange} name="newWidth"/>
                <input type="submit" value="Add"/>
            </form>

            <div className="results">
                {state.boxes.map((box, i) => (
                    <StyledBox
                        key={i}
                        bgColor={box.color}
                        width={box.width}
                        height={box.height}
                    />
                ))}
            </div>
        </div>
    );
}

export default BoxGenerator;
