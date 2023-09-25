import { useState } from "react";
import './AddItems.css';

export default function AddItems(props) {
  const { fetchData } = props;
  const [item, setItem] = useState({});
  const [name, setName] = useState("");
  const [task, setTask] = useState("");

  function add() {
    fetch(`http://localhost:9000/items`,
      {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(
          {
            name: name,
            task: task,
          }
        )
      },
    )
      .then(res => res.json())
      .then(data => setItem(data));
  }


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (name && task) {
        add();
      }
      else {
        alert("No Thing To Add ! ")
      }
      fetchData();
      setName("");
      setTask("");
    }}>
      <input type="text"
        placeholder="Enter Name..."
        id="name"
        onChange={(e) => setName(e.target.value)}
        value={name} />
      <input type="text"
        placeholder="Enter Task..."
        id="task"
        onChange={(e) => setTask(e.target.value)}
        value={task} />
      <input type="submit" value={"Add"} />
    </form>
  )
}