import { useState } from "react";

const AddTodo = ({onSubmit})=>{
    const [text,setText] = useState("");

    const handleSubmit =(event)=>{
        event.preventDefault();
        onSubmit(text);
        setText("");
    }

    return (
      <form onSubmit={handleSubmit} >
        <label>
          <input
            type="text"
            value={text}
            required={true}
            placeholder="add your todo here"
            onChange={(e) => setText(e.target.value)}
          />
          <span hidden={true}>enter your todo here</span>
        </label>
        <button type="submit">Add</button>
      </form>
    );
}

export default AddTodo;