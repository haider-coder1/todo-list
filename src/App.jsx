import react, { useState } from 'react'
import TodoList from './TodoList';
const app = () => {
  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([])

  
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    }
    );
    setInputList("");
  };
  const deleteItems = (id) => {
    console.log("delete");
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })
    })
  };


  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
          <br />
          <h1> ToDo List</h1>
          <br />
          <input type='text' placeholder='Add a items'
            value={inputList} onChange={itemEvent}  />
          <button onClick={listOfItems}>+</button>

          <ol>


            {/* {inputList} */}
            {items.map((itemval, index) => {
              return <TodoList key={index}
                id={index} text={itemval}
                onSelect={deleteItems}
              />;
            })}

          </ol>
        </div>

      </div>
    </>
  )
};

export default app;