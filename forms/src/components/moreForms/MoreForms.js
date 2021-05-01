import React, from 'react';

const MoreForms = (props) => {
    

   return (
        <form>
            <h2>Form Register</h2>
            <div className="row">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName"/>
            </div>
            <div className="row">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName"/>
            </div>
            <div className="row">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" />
            </div>
            <div className="row">
                <label htmlFor="pass">Password: </label>
                <input type="password" name="pass" />
            </div>
            <div className="row">
                <label htmlFor="confirmPass">Confirm Password: </label>
                <input type="password" name="confirmPass" />
            </div>
        </form>
   )
}

export default MoreForms;
