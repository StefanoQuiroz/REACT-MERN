import React, {useState} from 'react';

const FormRenderer = (props) => {
    const {userName, emailAddress, password} = props
    const [hasBeenSent, setHasBeenSent, input, setInputs] = useState(false);
    const createUser = (e) => {
        e.preventDefault()
        const newUser={userName, emailAddress, password}
        console.log("welcome", newUser);
        setHasBeenSent(true);
    }

    const onChangeClick = (e) => {
        const name=e.target.name;
        const value=e.target.value;
        setInputs({
            ...input,
            [name]:value,
        });
    }

    const formMessage = () =>{
        if(hasBeenSent){
            return 'thank you very much for submitting';
        } else{
            return 'Please submit the form!!'
        }
    }

    return (
        <form onSubmit={ createUser}>
            {/* formMessage()  funcion*/}
            <h3>{formMessage()}</h3>
            <div className="form-general">
                <label htmlFor="userName">User Name: </label>
                <input type="text" name="userName" onChange={onChangeClick}/>
            </div>
            <div className="form-general">
                <label htmlFor="emailAddress">Email: </label>
                <input type="text" name="emailAddress" onChange={onChangeClick}/>
            </div>
            <div className="form-general">
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" onChange={onChangeClick}/>
            </div>
            <input type="submit" value="Create User"/>
        </form>
    );
}

export default FormRenderer;
