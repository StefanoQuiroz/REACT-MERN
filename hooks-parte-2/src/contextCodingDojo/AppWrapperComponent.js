import React, {useContext} from 'react';
import MyContext from './MyContext';
const AppWrapperComponent = (props) => {
    const context = useContext(MyContext);
    return (
        <div>
            Hello {context}
        </div>
    );
}

export default AppWrapperComponent;
