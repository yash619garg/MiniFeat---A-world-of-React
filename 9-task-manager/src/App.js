import { useEffect, useState } from "react";
import Header from "./component/Header";
import Alert from "./component/Alert";
import List from "./component/List";

const localList = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  }
  else {
    return [];
  }
}

function App() {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const [list, setList] = useState(localList);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    if (!name) {
      showAlert(true, 'please enter the task title', 'error')
    }
    else if (name && isEditing) {
      setList(list.map((task) => {
        if (task.id === editId) {

          return { ...task, title: name }
        }
        else {
          return task;
        }
      }))
      showAlert(true, "task edited", "success");
      setEditId(null);
      setIsEditing(false);
      setName("");

    }
    else {
      console.log(name);
      const newTask = { title: name, id: new Date().getMilliseconds() }
      setList([...list, newTask]);
      showAlert(true, "task added in your list", "success");
      setName("");
    }
  }
  const showAlert = (show, msg, type) => {
    setAlert({ show: show, msg: msg, type: type });
  }

  const editTask = (id, title) => {
    setIsEditing(true);
    setEditId(id);
    setName(title);
  }
  const removeTask = (id) => {
    setList(list.filter((task) => task.id !== id))
    showAlert(true, "task removed from the list", "success");
  }
  const ClearList = () => {
    setList([]);
    showAlert(true, "all the tasks removed from the list", "success");
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list]);

  return (
    <>
      <div className="main-container" >
        {alert.show && <Alert alert={alert} removeAlert={showAlert} />}
        <Header />
        <form onSubmit={handleSubmit} className="form-container">
          <input type="text" placeholder="eg.study" className="input" value={name} onChange={(e) => { setName(e.target.value) }} />
          <button type="submit" className="btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </form>
        <List list={list} removeTask={removeTask} editTask={editTask} />
        {list.length > 0 && <button onClick={() => { ClearList() }} className="clear">CLEAR LIST</button>}
      </div>
    </>
  );
}

export default App;
