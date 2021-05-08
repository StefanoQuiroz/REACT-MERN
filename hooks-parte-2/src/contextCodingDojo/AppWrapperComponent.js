import React, {useContext} from 'react';
import MyContext from './MyContext';
const AppWrapperComponent = () => {
    const context = useContext(MyContext)
    return (
        <div>
            hello{context}
        </div>
    );
}

export default AppWrapperComponent;
