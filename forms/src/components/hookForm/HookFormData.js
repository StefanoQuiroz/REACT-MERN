import React from 'react';

const HookFormData = ({data}) => {
    return (
        <div className="form-data">
            <h2>Yor Form Data</h2>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Email: {data.email}</p>
            <p>Password: {data.pass}</p>
            <p>Confirm Password: {data.confirmPass}</p>
        </div>
    );
}

export default HookFormData;
