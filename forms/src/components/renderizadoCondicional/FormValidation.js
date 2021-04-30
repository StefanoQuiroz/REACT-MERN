import React, {useState} from 'react';

const FormValidation = (props) => {
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    const onChangeHandler = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
        if(e.target.value.length < 1){
            return setError('Please enter a valid title');
        } else if(e.target.value.length < 3){
            return setError('Please enter a tittle with more than 3 characters');
        }
    }

    const createMovie = (e) => {
        e.preventDefault();
        alert('Movie: '+title);
    }
    return (
        <form onSubmit={createMovie}>
            <div className="row">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange={onChangeHandler} />
                {
                    error ? 
                    <p style={{color:'red'}}>{error}</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create Movie"/>
        </form>
    );
}

export default FormValidation;
