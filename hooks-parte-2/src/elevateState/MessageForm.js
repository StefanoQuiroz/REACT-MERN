import React, {useState} from 'react';

const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    const {onNewMessage} = props;
    /* const onChange = (e) => {
        e.preventDefault();
        //const name= e.target.name;
        const value=e.target.value;
        setMsg({
            value
        })
    } */

    const onSubmit = (e) => {
        e.preventDefault();
        //console.log({msg});
        //actualiza invocando el accesorio onNewMessage={youveGptMail(msg  actual )} cambia el current message en App.js
        //levanta el estado hacia el padre
        onNewMessage(msg);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Set Message</h1>
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="Enter your Message here"
                    onChange={(e)=>setMsg(e.target.value)}
                    value={msg}
                >
                </textarea>
                <input type="submit" value="Send Message"/>
            </form>
        </div>
    );
}

export default MessageForm;
