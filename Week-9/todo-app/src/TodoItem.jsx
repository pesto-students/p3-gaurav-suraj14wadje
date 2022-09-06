
const TodoItem = ({id,isDone,todo,onChange})=>{
    return(
        <div className="todo-item">
        <label>
            <input type="checkbox" checked={isDone} onChange={()=>onChange(id,!isDone)} />
            <span>{todo}</span>
        </label>
        </div>
    )
}

export default TodoItem;