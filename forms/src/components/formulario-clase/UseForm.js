import React, {useState} from 'react';

const UseForm = () => {
    //const [userName, setUserName]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //inicializo el estatado inicial en "" => 0
    
    //method
    const createUser = (e) => {
        e.preventDefault();//evitar refrescar la página
        const newUser  = {email, password};
        console.log(newUser)
    }

    
    return (
        <form onSubmit={createUser}>
            <div>
                <label>Username: </label>
                <input type="text" />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Create User"/>
        </form>
    );
}

export default UseForm;

