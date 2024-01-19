import React, { useRef, useState } from 'react'
import Card from '../Card';
import Navbar from './components/Navbar';

const App = () => {
  const [data, setData] = useState([]);
  const todo = useRef()

  function todoFunc(e) {
    e.preventDefault();
    todo.current.value === "" ? alert('add todo') :
      data.push(todo.current.value)
    setData([...data])
    todo.current.value = ''
  }
  const deleteTodo = (index) => {
    console.log('todo delete', index);
    data.splice(index, 1);
    setData([...data]);
  }

  const editTodo = (index, value) => {
    console.log('todo edited', value);
    data.splice(index, 1, value);
    setData([...data]);
  }
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>Todo</h1>
      <form onSubmit={todoFunc} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
        <input type="text" placeholder='Enter Tod' ref={todo} />
        <button type='submit'>Add Todo</button>
      </form>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        {data.length > 0 ? data.map((item, index) => {
          return <Card key={index} todo={item} deleteTodo={deleteTodo} editTodo={editTodo} index={index} />
        }) : <h1>No todo...</h1>}
      </div>
    </>
  )
}

export default App