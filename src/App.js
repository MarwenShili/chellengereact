import './App.css';
import PersoneInput from './Components/personeInput/PersoneInput';
import { useState } from 'react';
import PersoneList from './Components/PersoneList/PersoneList';


const  App =() => {

  const [enteredPersone, setEnteredPersone] = useState([  
     { name: 'ghassen', age: 24 , id : Math.random().toString()},
     { name: 'Marwen', age: 24 , id : Math.random().toString()},
     { name: 'Fares', age: 23 , id : Math.random().toString()}
    ]);


 const personeHandler = (enteredName, enteredAge) => {
   setEnteredPersone( (prevPersone) => {
     return [...prevPersone, {name:enteredName , age: enteredAge , id : Math.random().toString()}]
   });
 }

 
//  let content = (<p>Error</p>)
 
//  if (enteredPersone.length > 3){
//    content = (<PersoneList items = {enteredPersone} />) ;
//  } 





console.log(enteredPersone);


  return (
    <div className="App">
     <h2>Challenge</h2>
     <PersoneInput addPersone={personeHandler}></PersoneInput>
     <PersoneList items = {enteredPersone} />
    {/* {content} */}

    </div>
  );
}

export default App;
