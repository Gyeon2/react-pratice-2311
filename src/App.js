import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import TodoForm from "./TodoForm";

function App() {
  const [todo, setTodo] = useState(
    [

    ]
  )
  const [newTodo, setNewTodo] = useState('')
  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  }
  const onSubmit = (newTodo) => (e) => {
    e.preventDefault();
    setTodo([{title: newTodo, complete:false, id:Math.random()}])
  }
  return (
    <div className="App">
      {todo.length === 0 ? (
        <>
          <div>할 일 목록을 입력하세요</div>
          <TodoForm onChangeNewTodo={onChangeNewTodo} newTodo={newTodo} onSubmit={onSubmit}/>
        </>
      ) : (
        <>
          {todo.map((t) => (<div key={t.id}>{t.title}</div>))}
          <TodoForm onChangeNewTodo={onChangeNewTodo} newTodo={newTodo} onSubmit={onSubmit}/>
        </>
      )}
    </div>
  );
}

export default App;
