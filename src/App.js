import { useState } from "react";


function App() {
    const [newItem, setNewItem] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                {
                    id: crypto.randomUUID(),
                    title: newItem,
                    completed: false,
                }
            ]
        })
        setNewItem('')
    }

    const toggleTodo = (id, completed) => {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed }
                }
                return todo
            })
        })
    }

    const deleteTodo = (id) => {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        });
    };
    return (
        <main className="main">
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
            <h1 className="header">To Do List:</h1>
            {todos.length === 0 && <p className="empty-list">The list is empty!</p>}
            <ul className="list">
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            <label className="item">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={todo.completed}
                                    onChange={e => { toggleTodo(todo.id, e.target.checked) }}
                                />
                                {todo.title}
                            </label>
                            <button onClick={() => deleteTodo(todo.id)} className="btn delete">Delete</button>
                        </li>
                    )
                }
                )}
            </ul>
        </main>
    );
}

export default App;
