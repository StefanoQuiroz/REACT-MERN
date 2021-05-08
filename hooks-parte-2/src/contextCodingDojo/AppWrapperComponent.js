import React, {useContext} from 'react';
import MyContext from './MyContext';
const AppWrapperComponent = (props) => {
    const {val,setVal} = useContext(MyContext);
    //const context = useContext(MyContext);
    // hello {val}
    setVal(5);
    return (
        <div>
            Hello {val}
        </div>
    );
}

export default AppWrapperComponent;
