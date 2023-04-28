import { TodoItem } from "./TodoItem";

export const TodoList = ({
    todos,
    toggleTodo,
    deleteTodo,
}) => {

    return (
        <>
            <h1 className="header">Todo List:</h1>
            <ul className="list">
                {todos.length === 0 && <p className="empty-list">No todos in the list</p>}
                {todos.map(todo => {
                    return (
                        <TodoItem
                            {...todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                            key={todo.id}
                        />
                    )
                }
                )}
            </ul>
        </>
    );
};