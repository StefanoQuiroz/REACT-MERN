import React, {useState} from 'react';

const MoreForms = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState("");

    const onChangeClick = (e) => {
        e.preventDefault();
        setFirstName(e.target.value);
        setLastName(e.target.value);
        setEmail(e.target.value);
        setPass(e.target.value);
        setConfirmPass(e.target.value);
        if(firstName.length > 0 && firstName.length < 2){
           return setError("First name must be at least 2 characters");
        } else if (lastName.length > 0 && lastName.length < 2){
        return setError("First name must be at least 2 characters");
        } else if (email.length > 0 && email.length < 5){
            return setError("First name must be at least 5 characters");
        } else if (pass.length === confirmPass.length){
            return setError("Pass must match")
        }
       //setFirstName("");

   }

   return (
        <form>
            <h2>Form Register</h2>
            <div className="row">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange={onChangeClick} />
                {
                    error ?
                    <p>{error}</p> : ''
                }
            </div>
            <div className="row">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName"/>
                {
                    error ?
                    <p>{error}</p> : ''
                }
            </div>
            <div className="row">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" />
                {
                    error ?
                    <p>{error}</p> : ''
                }
            </div>
            <div className="row">
                <label htmlFor="pass">Password: </label>
                <input type="password" name="pass" />
            </div>
            <div className="row">
                <label htmlFor="confirmPass">Confirm Password: </label>
                <input type="password" name="confirmPass" />
                {
                    error ?
                    <p>{error}</p> : ''
                }
            </div>
        </form>
   )
}

export default MoreForms;
