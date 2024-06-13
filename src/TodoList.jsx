import React from 'react'

const TodoList = (props) => {
 
  return (

    <>
    <div className='todo'>
    <i className="fa-solid fa-xmark" onClick={() =>{
      props.onSelect(props.id);
    }}></i>
  <li> {props.text}</li>
  </div>
  </>
);
    
  
};

export default TodoList