import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";


function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem('ITEMS');
        if(localValue == null) {
            return []
        }
        return JSON.parse(localValue)
    });

    useEffect(() => {
        localStorage.setItem('ITEMS', JSON.stringify(todos))
    }, [todos]) 

    const addTodo = (title) => {
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                {
                    id: crypto.randomUUID(),
                    title,
                    completed: false,
                }
            ]
        })
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
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

        </main>
    );
}

export default App;
