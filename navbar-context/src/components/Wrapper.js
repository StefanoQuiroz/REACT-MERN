import React, {useState} from 'react';
import MyContext from './MyContext';
import Form from './Form'

const Wrapper = (props) => {
    const [state,setState] = useState("");
    //<MyContext.Provider no provides /> <= Recordar
    return (
        <MyContext.Provider value={{state, setState}}>
            <Form>
            </Form>
        </MyContext.Provider>
    );
}

export default Wrapper;
