import React, {useState} from 'react';

const FormRendererConditional = (props) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSent, setHasBeenSent] = useState(false);

    const createUser = (event) => {
        event.preventDefault();
        const newUser = {userName, email, password};
        console.log("Welcome", newUser);
        //cambia el estado a formulario enviado
        setHasBeenSent(true);
    }

   /*  const formMessage = () => {
        if(hasBeenSent){
            return 'Thank you for submitting';
        } else {
            return 'Please submit the form';
        }
    } */
    
    return (
        //Operador ternario reemplaza la funcion {formMessage()}
        <form onSubmit={createUser}>
            {/* <h3>{formMessage()}</h3> */}
            {
                hasBeenSent ?
                <h3>Thank you for submitting</h3> : 
                <h3>Welcome, please submit the form</h3> 
            }
            <div className="form-row">
                <label htmlFor="userName">User Name: </label>
                <input type="text" name="userName" onChange={(e)=> setUserName(e.target.value)}/>
            </div>
            <div className="form-row">
                <label htmlFor="email">Email Address: </label>
                <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="form-row">
                <label htmlFor="userName">Pasword: </label>
                <input type="password" name="password" onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Create User"/>
        </form>
    );
}

export default FormRendererConditional;
