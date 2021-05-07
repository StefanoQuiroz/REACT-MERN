import React, {useState} from 'react';

const Tabs = () => {
    let array = [1,2,3];
    const [state, setState] = useState({
        currentTab: 1
    })

    const onClickHandle = (e, value) => {
        setState({
            currentTab: value
        })
    }




    return (
        <div>
            {/* map(item, index) */}
            {array.map((item, index) => (
                <button
                    key={index}
                    onClick={(e) => onClickHandle(e,item)}
                >   
                    Tab {state.currentTab}
                </button>
            ))}
            {/* Resultado en un div cuando haga click en la pestaña */}
            <div className="results">
                Tab {state.currentTab} content is showing here.
            </div>            
        </div>
    );
}

export default Tabs;
