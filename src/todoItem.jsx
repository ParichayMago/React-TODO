export function TodoItem({ todo, toggleTodo, deleteTodos }) {
  const { completed, id, title } = todo;

  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            toggleTodo(id, e.target.checked);
          }}
        />
        {title}
      </label>
      <button
        onClick={() => {
          deleteTodos(id);
        }}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
