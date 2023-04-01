import { v4 as uuid } from "uuid";
import TodoForm from "../../components/todoForm";

function crudTaskActions(
  alltTodos,
  todos,
  setAllTodosAndSave,
  setTodos,
  setForm
) {
  const handleAdd = (input) => {
    const NewTodo = {
      id: uuid(),
      content: input.content,
      dueDate: input.date,
      dueClock: input.clock,
      isComplete: false,
      thumbtack: false,
      creationDate: new Date(),
    };

    setTodos([NewTodo]);
    setAllTodosAndSave((alltTodos) => [...alltTodos, NewTodo]);
    setForm("");
  };

  const handleRemove = (id) => {
    const filterTodos = (array) => {
      return array.filter((todo) => todo.id !== id);
    };
    setAllTodosAndSave((alltTodos) => filterTodos(alltTodos));
    setTodos((todos) => filterTodos(todos));
  };

  const handleEdit = (id) => {
    const todoForEdit = alltTodos.find((todo) => todo.id === id);
    setTodos([todoForEdit]);
    const upDateValuse = (input) => {
      todoForEdit.content = input.content;
      todoForEdit.dueDate = input.date;
      todoForEdit.dueClock = input.clock;
      setTodos([todoForEdit]);
      setAllTodosAndSave([...alltTodos]);
      setForm("");
    };
    setForm(
      <TodoForm
        className="border"
        onSubmit={upDateValuse}
        initialValues={{
          content: todoForEdit.content,
          date: todoForEdit.dueDate,
          clock: todoForEdit.dueClock,
        }}
        buttonTitle={"Edit"}
      />
    );
  };

  const handleIsCompleteChange = (id, isComplete) => {
    const mapTodos = (array) => {
      return array.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete,
            thumbtack: false,
          };
        }
        return todo;
      });
    };
    setAllTodosAndSave((alltTodos) => mapTodos(alltTodos));
    todos.every((todo) => todo.isComplete) && todos.length !== alltTodos.length
      ? setTodos((todos) => todos.filter((todo) => todo.id !== id))
      : setTodos(mapTodos(todos));
  };

  const handleThumbtackChange = (id, thumbtack) => {
    const mapTodos = (array) => {
      return array.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            thumbtack,
          };
        }
        return todo;
      });
    };

    setAllTodosAndSave(mapTodos(alltTodos));
    todos.every((todo) => todo.thumbtack) && todos.length !== alltTodos.length
      ? setTodos((todos) => todos.filter((todo) => todo.id !== id))
      : setTodos(mapTodos(todos));
  };
  return [
    handleAdd,
    handleRemove,
    handleEdit,
    handleIsCompleteChange,
    handleThumbtackChange,
  ];
}
export default crudTaskActions;
