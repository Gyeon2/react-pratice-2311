export default function TodoItem ({ item, index, setTodo }) {
    const onChange = (e) => {
        todo[index].completed = e.target.checked;
        setTodo((prevTodo)=> {
            nextTodo[index] = {...nextTodo[index]}
            const nextTodo = [...prevTodo]
            nextTodo[index].completed = e.target.checked;
            prevTodo[index] === nextTodo[index] //false
            return '';
        });
    }
    return(
        <div key={item.id}><input type="checkbox" checked={item.completed} onChange={onChange}/>{item.title}</div>
    )
}