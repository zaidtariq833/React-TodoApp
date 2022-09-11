import React, {useState} from 'react';

const TodoList = (props) => {
 
      return (
      <>
      <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '10px'}} className='todo_style'>
      <button onClick = {() => {
        props.onSelect(props.id);
      }} className='button_cross'>X</button>
      </div>  
      <li>{props.text}</li>
      </>
      )
}

export default TodoList;