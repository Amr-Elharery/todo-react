// import './App.css';
import { useEffect, useState } from 'react';
import TodoItems from './components/todo-items/TodoItems';
import AddItems from './components/add-items/AddItems';

function App() {
  const [state, setState] = useState([]);

  function fetchData() {
    fetch("http://localhost:9000/items")
      .then(res => res.json())
      .then(data => setState(data));
  }
  useEffect(() => {
    fetchData();
  }, [])


  let deleteItem = (id) => {
    fetch(`http://localhost:9000/items/${id}`,
      {
        method: "DELETE",
      }
    )
      .then(res => res.json())
      .then(data => fetchData());
  }



  return (
    <div className="App container">
      <h1 className='text-c'>Todo List App</h1>
      <TodoItems items={state} deleteItem={deleteItem} />
      <AddItems fetchData={fetchData} />
    </div>
  );
}

export default App;
