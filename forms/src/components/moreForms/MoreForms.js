import React from 'react';

const MoreForms = (props) => {
    const {inputs, setInputs} = props;

    const onChangeClick = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({
            ...inputs,
            [name]:value,
        })
        
    }

    //Methods
    /* const setFirstName = () =>{
        if(inputs.firstName.length > 0 && inputs.firstName.length <2){
            return "First Name must be at least 2 characters";
        } else {
            return "";
        }
    }
    const setLastName = () =>{
        if(inputs.lastName.length > 0 && inputs.lastName.length <2){
            return "Last Name must be at least 2 characters";
        } else {
            return "";
        }
    }
    const setEmail = () => {
        if(inputs.email.length > 0 && inputs.email.length < 5){
            return "Email must be at least 3 characters";
        } else {
            return "";
        }
    }

    const setPass = () => {
        if(inputs.pass.length > 0 && inputs.pass.length < 8){
            return "Password must be at least 8 characters";
        } else {
            return "";
        }
    }

    const setConfirmPass = () => {
        if(inputs.pass.length !== inputs.confirmPass.length){
            return "Passwords must match";
        } else {
            return "";
        }
    } */

    return (
        <form>
            <h2>Form Register</h2>
            <div className="row">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange={onChangeClick}/>
                {/* <h5>{setFirstName()}</h5> */}
                {
                    (inputs.firstName.length >0 && inputs.firstName.length < 2) ?
                    <h5>First Name must be at least 2 characters</h5> : 
                    ""                  
                }
            </div>
            <div className="row">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" onChange={onChangeClick}/>
                {/* <h5>{setLastName()}</h5> */}
                {
                    (inputs.lastName.length > 0 && inputs.lastName.length < 2) ? 
                    <h5>LastName must be at least 2 characters</h5> : 
                    ""
                }
            </div>
            <div className="row">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange={onChangeClick}/>
                {/* <h5>{setEmail()}</h5> */}
                {
                    (inputs.email.length > 0 && inputs.email.length < 5)?
                    <h5>Email must be at least 2 characters</h5> : 
                    ""
                }
            </div>
            <div className="row">
                <label htmlFor="pass">Password: </label>
                <input type="password" name="pass" onChange={onChangeClick}/>
                {/* <h5>{setPass()}</h5> */}
                {
                    (inputs.pass.length > 0 && inputs.pass.length < 8) ? 
                    <h5>Password must be at least 2 characters</h5> : 
                    ""
                }
            </div>
            <div className="row">
                <label htmlFor="confirmPass">Confirm Password: </label>
                <input type="password" name="confirmPass" onChange={onChangeClick}/>
                {/* <h5>{setConfirmPass()}</h5> */}
                {
                    (inputs.pass.length === inputs.confirmPass.length) ? 
                    "" :
                    <h5>Psswords must match</h5>
                }
            </div>
        </form>
   )
}

export default MoreForms;
