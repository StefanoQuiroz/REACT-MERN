import React, {useState} from 'react';
import StyledButton from './StyledButton';

const Tabs = (props) => {
    const array = [1,2,3];
    
    const [state, setState] = useState({
        //array[0] inicar el currentTab: 1;
        currentTab: 1
    })

    //Method onClick
    const onClickHandle = (e, value) => {
        setState({
            currentTab: value
        })
    }
    //{ map() => {return button}}  === { map() => (button)}
    return (
        <div>
            {/* Comentario: agragar styled-components */}
            <div className="tabs">
                {array.map((item, index)=> (
                    <StyledButton 
                        key={index}
                        onClick={(e)=> onClickHandle(e, item)}
                        bgColor={state.currentTab === item}
                    >Tab {item}
                    </StyledButton>
                ))}
            </div>
            
            {/* Mostrar el resultado - comentario: cambiar por un p tag*/}
            <div className="results">
                Tab {state.currentTab} content is showing here
            </div>
            <div className="trade-mark">
                By Stefano Quiroz
            </div>
        </div>
    );
}

export default Tabs;

/* agregar animaciones CSS a la pestaña de cambio para suavizar la experiencia de cambio */
