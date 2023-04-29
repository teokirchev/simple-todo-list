

export const TodoItem = ({
    completed,
    id,
    title,
    toggleTodo,
    deleteTodo,

}) => {
    return (
        <li key={id}>

            <label className={completed ? "check" : "item"} >
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={completed}
                    onChange={e => { toggleTodo(id, e.target.checked) }}
                />

                {title}
            </label>
            <button
                onClick={() => deleteTodo(id)}
                className="btn delete">X
            </button>
        </li>
    );
};