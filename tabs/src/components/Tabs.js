import React, {useState} from 'react';

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
            {array.map((item, index)=> (
                <button 
                key={index}
                onClick={(e)=> onClickHandle(e, item)}
                >Tab {item}
                </button>
            ))}
            {/* Mostrar el resultado - comentario: cambiar por un p tag*/}
            <div className="results">
                Tab {state.currentTab} content is showing here
            </div>
        </div>
    );
}

export default Tabs;
