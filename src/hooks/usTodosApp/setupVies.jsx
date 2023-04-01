import TodoForm from "../../components/todoForm";

function setupView(alltTodos, setTodos, setForm, handleAdd) {
  const viewResultSearch = (input) => {
    setForm(" ");
    const mapTodos = [];
    alltTodos.map((todo) => {
      if (todo.content.includes(input) || todo.dueDate.includes(input)) {
        mapTodos.push(todo);
      }
      return todo;
    });
    setTodos(mapTodos);
  };

  const viewForm = () => {
    setTodos([]);
    setForm(
      <TodoForm className="border" onSubmit={handleAdd} buttonTitle={"Add"} />
    );
  };

  const viewAllTasks = () => {
    setTodos(alltTodos);
    setForm("");
  };

  const viewCompltetTasks = () => {
    setTodos(alltTodos.filter((todo) => todo.isComplete));
    setForm("");
  };

  const viewPinnedTasks = () => {
    setTodos(alltTodos.filter((todo) => todo.thumbtack));
    setForm("");
  };

  const viewFortodayTasks = () => {
    const today = [
      new Date().getUTCFullYear().toString(),
      (new Date().getMonth() + 1).toString(),
      new Date().getDate().toString(),
    ];
    const year = today[0];
    const month = today[1].padStart(2, "0");
    const day = today[2].padStart(2, "0");
    const formattedToday = `${year}-${month}-${day}`;
    setTodos(alltTodos.filter((todo) => todo.dueDate === formattedToday));
    setForm("");
  };
  return [
    viewAllTasks,
    viewCompltetTasks,
    viewPinnedTasks,
    viewFortodayTasks,
    viewResultSearch,
    viewForm,
  ];
}

export default setupView