import React from 'react';

const Formulario = () => {
    const onSubmit =(e) => {
        e.preventDefault();
        //const formData = new FormData(e.target);
        const form = e.target.closest('form');
        const formData = new FormData(form);
        const data = {};
        //un map es {{},{}}
        for( let [key, value] of formData.entries()){
            data[key]=value; 
        }
        console.log({formData, formDataentries: formData.entries(), data})
        
    }
    return (
        //para no hacer useState por cada input
        //onChange para un formulario entero
        <form className="formulario" onSubmit={onSubmit} onChange={onSubmit}>
            <label htmlFor="username-1">User Name</label>
            <input type="text" name="username" id="username-1"/>
            <br/>
            <label htmlFor="email-1">Email</label>
            <input type="email" name="email" id="email-1"/>
            <br/>
            <label htmlFor="tel-1">Tel</label>
            <input type="tel" name="numero"/>
            <br/>
            <label htmlFor="password-1">Password</label>
            <input type="password" name="password" id="passwords-1"/>
            <br/>
            <button>Click me</button>
        </form>
    );
}

export default Formulario;
