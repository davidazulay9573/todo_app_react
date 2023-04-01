import TodoItem from "./todoItem";

function TodoList({
  todos,
  onIsCompleteChange,
  onThumbtackChange,
  onDelete,
  onEdit
}) {
  return (
    <div className="todo-list">
      <ul className="list-group">
        {[...todos]
          .sort((a, b) => (a.thumbtack ? 1 : -1))
          .sort((a, b) => (a.isComplete ? 1 : -1))
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onIsCompleteChange={(isComplete) =>
                onIsCompleteChange(todo.id, isComplete)
              }
              onThumbtackChange={() =>
                !todo.thumbtack
                  ? onThumbtackChange(todo.id, true)
                  : onThumbtackChange(todo.id, false)
              }
              onDelete={() => onDelete(todo.id)}
              onEdit={() =>{ onEdit( todo.id )}
              }
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
