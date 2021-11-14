import './App.css';
import PersoneInput from './Components/personeInput/PersoneInput';
import { useState } from 'react';


const  App =() => {

  const [enteredPersone, setEnteredPersone] = useState([   { name: 'Do all exercises!', age: 25 },]);


const personeHandler = (dataEntered) => {
  setEnteredPersone(prevPersone => {
    const allPersone =[...prevPersone];
    allPersone.unshift({name:dataEntered.name , age: dataEntered.age});

  });

}
console.log(enteredPersone);


  return (
    <div className="App">
     <h2>Challenge</h2>
     <PersoneInput addPersone={personeHandler}></PersoneInput>
    </div>
  );
}

export default App;
