import React, {useState, useRef} from 'react';

const BoxGenerator = () => {
    const colorCampo = useRef();
    const [state, setState] = useState({
        boxes: [], 
        newColor: '', 
    })

    const onChange = (e) => {
        e.preventDefault();
        const value= e.target.value
        setState({
            ...state,
            color: value
        })

    }

    const onSubmit = (e) => {
        e.preventDefault();
        setState({
            boxes: [...state.boxes, {
                color: state.newColor
            }],
            newColor:''
        });
        colorCampo.current.value = '';
    }

    return (
        <div>
            <h1>Box Generator</h1>
            <form onSubmit={onSubmit}>
                <label>Color</label>
                <input type="text" ref={colorCampo} onChange={onChange} placeholder="Ingrese color"/>
                <input type="submit" value="Add"/>
            </form>
            {/* Donde se van mostrar los cuadrados */}
            <div className="blocks">
                
            </div>

        </div>
    );
}

export default BoxGenerator;
