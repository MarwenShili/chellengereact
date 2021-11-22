import './PersoneInput.module.css';
import { useState, useRef } from 'react';
import Error from '../UI/error/Error';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './PersoneInput.module.css';



const PersoneInput = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredName, setEnteredName] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');


    // const inputNameHandler = (e) => {
    //     setEnteredName(e.target.value);
    // };

    // const inputAgeHandler = (e) => {
    //     setEnteredAge(e.target.value);
    // };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value ;
        const enteredAge = ageInputRef.current.value ;

        if (enteredName.trim().length == '' && enteredAge.trim().length == ''  ) {
            setError({
                title: 'Invalid Name and Age ',
                message: 'Please enter a valid name and age (non-empty values).',
              });
        } else if (enteredName.trim().length == ''  ) {
            setError({
                title: 'Invalid Name',
                message: 'Please enter a valid name (non-empty values).',
              });
        } else if (enteredAge.trim().length =='' || enteredAge <0  ){
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid  age (non-empty values).',
              });
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
    const errorHandler = () => {
        setError(null);
      };
    
    return (
        <div>
             {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
            <form onSubmit={formSubmitHandler}>
                <label>Name</label> <br />
                <input /*value={enteredName}*/ type="text"  ref={nameInputRef} /*onChange={inputNameHandler} */></input><br />
                <label>Age</label><br />
                <input /*value={enteredAge}*/ type="number" ref={ageInputRef}/*onChange={inputAgeHandler}*/></input><br />
                <Button type="submit" >ADD</Button>
                <br />
                
            </form>
        </Card>
        </div>
    );
};
export default PersoneInput;