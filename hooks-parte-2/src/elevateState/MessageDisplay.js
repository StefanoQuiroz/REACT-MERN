import React from 'react';

const MessageDisplay = (props) => {
    const {message} = props
    return (
        <div>
            <h1>Current Message</h1>
            {/* muestra el mensaje cuando se actualiza el cambio */}
            <pre>{message}</pre>            
        </div>
    );
}

export default MessageDisplay;
