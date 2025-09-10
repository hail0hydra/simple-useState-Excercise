import { useState } from "react"

const TodoList = () => {

    const [arr, setArr] = useState([])
    const [task, setTask] = useState("")


    const handleSubmit = ()=> {
        const x = [task]
        event.preventDefault();
        setTask("")
        setArr(()=>[...arr,x])
    }

    return (
        <div style={{background:'teal', padding: 20, borderRadius:18}}>
            <h1>To Do List</h1>
            <p>Tasks: {arr.length}</p>
            
            <ul>
                {
                    arr.map((item) => (
                            <li key={Math.random()}>{item}</li>
                    ))
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text"  placeholder="add new task" name="task" value={task} onChange={(event)=> setTask(event.target.value)} />
                </label>
                <button type="submit">Add Task</button>
            </form>
            <br/>
        </div>
    )
}

export default TodoList
