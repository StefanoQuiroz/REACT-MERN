import React, {useState} from 'react';

const UseFormOwn = (props) => {
    const [userName, setUser] = useState(""); //hooks o ganchos
    const [email, setEmail] = useState(""); // hooks o ganchos
    const [password, setPassword] = useState(""); // hooks o ganchos
    //preventDefault() evita refrescar la página
    const createUser = (e) => {e.preventDefault(); setUser(""); setPassword(""); setEmail(""); const user = {userName, email, password}; console.log("Welcome", user)};
    //value shorthand => para unir todos los campos
    //Declaramos un nuevo objeto
    //const user = {userName, email, password} = const user = {userName:userName, email:email, password:password}

    return (
        <form onSubmit={createUser}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" placeholder="Username" onChange={(e) => setUser(e.target.value)} value={userName}/>
            <label htmlFor="email">Email Address: </label>
            <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <label htmlFor="password">Password: </label>
            <input type="text" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <input type="submit" value="Create User"/>
        </form>
    );
}

export default UseFormOwn;
