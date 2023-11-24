export default function TodoForm({onSubmit, newTodo, onChangeNewTodo}) { //prop
  return (
    <form onSubmit={onSubmit}>
    <input type="text" value={newTodo} onChange={onChangeNewTodo}/>
    <button>추가</button>
  </form>
  )

}