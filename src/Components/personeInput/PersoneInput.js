import './PersoneInput.css';
import { useState } from 'react';

const PersoneInput = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');


    const inputNameHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const inputAgeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (enteredName.trim().length == '' && enteredAge.trim().length == ''  ) {
            setError('Name and age not found');
        } else if (enteredName.trim().length == ''  ) {
            setError("name not found");
        } else if (enteredAge.trim().length =='' || enteredAge <0  ){
            setError('Age not found');
        }
        else if (enteredName.trim().length > 0 && enteredAge.trim().length > 0) {
            setError('')
            props.addPersone(enteredName, enteredAge);
        }

    }
    // const formSubmitHandler = (e) => {
    //     e.preventDefault();
    //   switch(enteredName | enteredAge){
    //     case enteredName.trim().length == '' && enteredAge.trim().length == '' : setError('Name and age not found');
    //     break ;
    //     case enteredName.trim().length == ''  : setError('Name not found');
    //     break ;
    //     case enteredAge.trim().length == '' || enteredAge <0  : setError('Age not found');
    //     break;
    //     case enteredName.trim().length > 0 && enteredAge.trim().length > 0 : 
    //      props.addPersone(enteredName, enteredAge);
    //     break ;

    //   }
    
    // }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <label>Name</label> <br />
                <input value={enteredName} type="text" onChange={inputNameHandler} ></input><br />
                <label>Age</label><br />
                <input value={enteredAge} type="number" onChange={inputAgeHandler}></input><br />
                <button type="submit">ADD</button>
                <br />
                {error}

                
            </form>

            {/* <Error /> */}

        </div>
    );
};
export default PersoneInput;