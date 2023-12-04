
import './App.css';
import {useState} from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function App() {
  const [todo, setTodo] = useState([])



  const onSubmit = (newTodo) => {
    const nextTodo = [...todo, {title: newTodo, complete:false, id:Math.random()}];
    setTodo(nextTodo);
  }

  return (
    <div className="App">
      {todo.length === 0 ? (
        <>
          <div>할 일 목록을 입력하세요</div>
          <TodoForm onSubmit={onSubmit}/>
        </>
      ) : (
        <>
          {todo.map((t) => (<TodoItem key={t.id} item={t} setTodo={setTodo}/>))}
          <TodoForm onSubmit={onSubmit}/>
        </>
      )}
    </div>
  );
}

export default App;
