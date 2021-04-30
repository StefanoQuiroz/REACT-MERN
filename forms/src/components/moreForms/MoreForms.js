import React from 'react';

const MoreForms = (props) => {
    const {inputs, setInputs} = props;
    
    const onChangeClick = (event) => {
       const name = event.target.name;
       const value = event.target.value;
       setInputs({
           ...inputs,
           [name]:value
       })
   }
   return (
       <form>
           <h2>Form Register</h2>
           <div className="row">
               <label htmlFor="firstName">First Name: </label>
               <input type="text" name="firstName" onChange={onChangeClick}/>
           </div>
           <div className="row">
               <label htmlFor="lastName">Last Name: </label>
               <input type="text" name="lastName" onChange={onChangeClick}/>
           </div>
           <div className="row">
               <label htmlFor="email">Email: </label>
               <input type="email" name="email" onChange={onChangeClick}/>
           </div>
           <div className="row">
               <label htmlFor="pass">Password: </label>
               <input type="password" name="pass" onChange={onChangeClick}/>
           </div>
           <div className="row">
               <label htmlFor="confirmPass">Confirm Password: </label>
               <input type="password" name="confirmPass" onChange={onChangeClick}/>
           </div>
       </form>
   )
}

export default MoreForms;
