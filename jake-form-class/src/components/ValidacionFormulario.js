/* import React, {useState, useRef} from 'react';

const ValidacionFormulario = () => {
    const [formInfo, setFormInfo] = useState({
        firstName: "",
        lastName:"",
        email: "",
        password:"",
        confirmPassowrd: ""
    })
    //useRef
    const formRef = useRef(null);
    //esto recibe data
    const verify = (data) => {
        const {firstName, lastName, email, password, confirmPassword} = data;
        const errores = [];
        
        if(firstName.length <= 2){
            errores.push({location: "firstName", message: "First Name need to be more than 2 characters"});
        }

        if(lastName.length <=2){
            errores.push({location: "lastName", message: "Last Name need to be more than 2 characters"});
        }

        const validEmail = email.test(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

        if(!validEmail){
            errores.push({location:"email", message:"Email needs to be formatted correctly"})
        }
        
        if(password !== confirmPassword){
            errores.push({location: "confirmPassword", message: "passwords must be match"});
        }
        //si hay push en errores, exito sera falso
        return {errores, exito: !errores.length}
        //return {errores: [], exito:true}
    }
    //va tomar la lista de errores
    const showError = (errores) => {
        formRef
            .querySelectorAll(`[data-error-de]`)
            .forEach((span)=> span.innerText = '');
        errores.forEach((err)=>{
            const {location, msg} = err;
            const span = formRef.querySelector(`data-de-error="${location}"`);
            span.innerText = msg;
        })
    }

    const onSubmit = (e) => {
        e.prevenDefault();
        const verified = verify();
        if(verified.exito === true){
            console.log("exito");
        } else console.log(verified.errores);
    }
    
    const onChange = (e) => {
        e.preventDefault();
        const form = e.target.closest('form');
        const formData = new FormData(form);
        const data = {};
        for(let [key, value] of formData.entries()) data[key]=value;
        setFormInfo(data);
        const {errores, exito} = verify(data);
        showError(errores);
    }
    //tiene que ser igual al name de los inputs
    const {firstName, lastName, email, password, confirmPassword} = formInfo
    
    return (
        <div>
            <form onChange={onChange} onSubmit={onSubmit} ref={formRef}>
                <input type="text" name="firstName"/>
                <span data-de-error="firstName"></span>

                <input type="text" name="lastName"/>
                <span data-de-error="lastName"></span>

                <input type="text" name="email"/>
                <span data-de-error="email"></span>

                <input type="text" name="password"/>
                <input type="text" name="confirmPassword"/>
                <span data-de-error="confirmPassword"></span>
                <button>submit</button>
            </form>
            <div>
                <div>First Name: {firstName}</div>
                <div>Last Name: {lastName}</div>
                <div>Email: {email}</div>
                <div>Password: {password}</div>
                <div>Confirm Password: {confirmPassword}</div>
            </div>   
        </div>
    );
}

export default ValidacionFormulario;
 */