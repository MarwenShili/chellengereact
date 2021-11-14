import './PersoneInput.css';
import { useState } from 'react';

const PersoneInput = (props) => {

    const [enteredName ,setEnteredName] = useState('');
    const [enteredAge ,setEnteredAge] = useState('');


    const inputNameHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const inputAgeHandler = (e) => {
        setEnteredAge(e.target.value);
    };
const data =[{name: enteredName ,age: enteredAge}]



    const formSubmitHandler = (e) => {
          e.preventDefault();

        props.addPersone(data);
    }


    return(
        <div>
<form onSubmit={formSubmitHandler}>
    <label>Name</label>
    <input type="text" onChange={inputNameHandler} ></input>
    <label>Age</label>
    <input type="number" onChange={inputAgeHandler}></input>
    <button type="submit">ADD</button>
</form>
        </div>
    );
};
export default PersoneInput ;