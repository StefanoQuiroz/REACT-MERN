import React, {useContext} from 'react';
import MyContext from './MyContext';
const AppWrapperComponent = (props) => {
    const context = useContext(MyContext);
    context.setVal(5);
    return (
        <div>
            Hello {context.val}
        </div>
    );
}

export default AppWrapperComponent;
