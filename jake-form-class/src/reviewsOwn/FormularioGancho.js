import React, {useState} from 'react';
//Otra manera en vez de tener con un state, setState en el app.js
const FormularioGancho = () => {
    const [formEntry, setFormEntry] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setFormEntry({
            ...formEntry,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({firstName, lastName, email, password, confirmPassword})
    }

    const{firstName, lastName, email, password, confirmPassword} = formEntry;

    return (
        <div className="Form-Group" onSubmit={onSubmit}>
            <form>
                <label htmlFor="firstName">User Name</label>
                <input type="text" name="firstName" onChange={onChange} value={firstName}/>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange={onChange} value={lastName}/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={onChange} value={email}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={onChange} value={password}/>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="Password" name="confirmPassword" onChange={onChange} value={confirmPassword}/>
                <input type="submit" value="Send"/>
            </form>
            {/* <div className="Results">
                <h3>First Name: {firstName}</h3>
                <h3>Last Name: {lastName}</h3>
                <h3>Email: {email}</h3>
                <h3>Password: {password}</h3>
                <h3>Confirm Password: {confirmPassword}</h3>
            </div>       */}      
        </div>
    );
}

export default FormularioGancho;
