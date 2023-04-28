import { useState } from "react";


export const TodoForm = ({
    addTodo
}) => {

    const [newItem, setNewItem] = useState('');

     const handleSubmit = (e) => {
        e.preventDefault();
        if(newItem === '') {
            return 
        }
        addTodo(newItem)
        setNewItem('')
    }

    return (

        <form onSubmit={handleSubmit}>
            <label className="header-input">New To Do</label>
            <input
                type="text"
                required
                value={newItem}
                onChange={(e) => {
                    setNewItem(e.target.value)
                }}
            />
            <button className="btn">Add</button>
        </form>
    )
}