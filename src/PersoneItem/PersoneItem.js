import React from 'react';
import Button from '../Components/UI/Button/Button';
import './PersoneItem.module.css';

const DeletePersone = (props) => {
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };
    
  return (
    <div>
        <li  className="goal-item" >
          {props.children}
         <span> <Button onClick={deleteHandler}>Delete</Button> </span>
        </li>
    </div>
  )
}

export default DeletePersone;