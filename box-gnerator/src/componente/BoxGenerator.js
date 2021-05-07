import React, {useState, useRef} from 'react';
import StyledBox from '../componente/StyledBox'
const BoxGenerator = () => {
    const colorCampo = useRef();
    const [state, setState] = useState({
        boxes: [], 
        newColor: '', 
    })

    const onChange = (e) => {
        try{  
            e.preventDefault();
            const value= e.target.value
            setState({
                ...state,
                newColor: value
            })
        }
        catch{
            console.error()
        }
      

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
            {/* Donde se van mostrar los cuadrados en vez de un componente */}
            <div className="blocks">
                {state.boxes.map((box, i) => (
                    <StyledBox
                        key={i}
                        bgColor = {box.color}
                    />
                ))}
            </div>

        </div>
    );
}

export default BoxGenerator;
