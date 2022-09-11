import React, {useState} from 'react'
import TodoList from './TodoList'
import './App.css'

const App = () => {
  const [inputList, setInputList] = useState("")
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value)
  }

  const listOfItems = (e) => {
    setItems((oldItems) => {
      return[...oldItems, inputList]
    })

    setInputList("")
  }

  const deleteItems = (id) => {
    console.log("deleted")

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id 
      })
    })
  }

  return (
    <>
    <div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type = "text" placeholder='Add Items' value = {inputList} onChange={itemEvent}/>
        <button onClick={listOfItems}>+</button>
        {items.map((itemval, index) =>{
        return  <TodoList key = {index} id = {index} text = {itemval} onSelect = {deleteItems}/>
        })}
      </div>
    </div>
    </>
  )
}

export default App
