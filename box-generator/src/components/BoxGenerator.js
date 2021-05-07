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

    //Method for color
    const onChangeColor = (e) => {
        e.preventDefault();
        const value =e.target.value;
        //const name = e.target.value;
        //[name]: value
        setState({
            ...state,
            newColor: value,      
        })
    }    
    //Method for height
    
    const onChangeHeight = (e) => {
        e.preventDefault();
        const value =e.target.value;
        //const name = e.target.value;
        //[name]: value
        setState({
            ...state,
            newHeight: value,      
        })
    }    
    
    //Method for width
    const onChangeWidth = (e) => {
        e.preventDefault();
        const value =e.target.value;
        //const name = e.target.value;
        //[name]: value
        setState({
            ...state,
            newWidth: value,      
        })
    }
    
    //onSubmit
    const onSubmit = (e) => {
        e.preventDefault();
        setState({
            boxes: [...state.boxes, {color: state.newColor, height: state.newHeight, width: state.newWidth }],
            newColor: "",
            newWidth: 0,
            newHeight: 0
        })
        colorCampo.current.value= "";
        alturaCampo.current.value= "";
        anchoCampo.current.value= "";
    }



    return (
        <div>
            <form className="formulario" onSubmit={onSubmit}>
                <div className="container">
                    <div className="input">
                        <label htmlFor="color">Color</label>
                        <input type="text" ref={colorCampo} onChange={onChangeColor} name="color"/>
                    </div>
                    <div className="input">
                        <label htmlFor="height">Height</label>
                        <input type="text" ref={alturaCampo} onChange={onChangeHeight} name="newHeight"/>    
                    </div>
                    <div className="input">
                        <label htmlFor="width">Width</label>
                        <input type="text" ref={anchoCampo} onChange={onChangeWidth} name="newWidth"/>
                    </div>
                </div>
                <input className="button" type="submit" value="Add"/>
            </form>

            <div className="results">
                {state.boxes.map((box, i) => (
                    <StyledBox
                        key={i}
                        bgColor={box.color}
                        height={box.height}
                        width={box.width}
                    ></StyledBox>
                ))}
            </div>
        </div>
    );
}

export default BoxGenerator;
