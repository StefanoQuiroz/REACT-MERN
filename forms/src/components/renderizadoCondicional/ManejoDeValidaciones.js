import React, {useState} from 'react';

const ManejoDeValidaciones = (props) => {
    const setTitle = useState("");
    //estado title = "" luego cambia con setState => state="blablah"
    const [titleError, setTitleError] =useState("");

    const onChangeHandle = (e) => {
        //setState
        setTitle(e.target.value);
        if(e.target.value.length < 1){
            setTitleError("Title is required");
        } else if(e.target.value.length < 3){
            setTitleError("Title must be 3 characters or longer!");
        }
    }


    return (
        <form onSubmit={(e)=> e.preventDefault()}>
            <div className="form-row">
                <label>Title: </label>
                <input type="text" onChange={onChangeHandle}/>
                {
                    titleError ?
                    <p style={{color:'red'}}>{titleError}</p> : 
                    ''
                }
            </div>
            <input type="submit" value="Create Movie"/>
        </form>
    );
}

export default ManejoDeValidaciones;
