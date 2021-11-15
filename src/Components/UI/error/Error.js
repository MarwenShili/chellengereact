import Card from '../Card/Card';
import React from 'react';
import './Error.module.css';
import classes from './Error.module.css';
import Button from '../Button/Button';
import angry from  './angry.png'

const Error = (props) => {
  
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <h3>{props.message} </h3><img src= {angry} width="30" height="30" />
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Error;