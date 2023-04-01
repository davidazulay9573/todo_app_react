import TodoList from "./todoList";
import { ButtonsMenu } from "./ButtonMenu";
import { Search } from "./search";
import { useTodods } from "../hooks/usTodosApp/useTodos";

function TodoApp() {
  const [
    todos,
    form,
    handleRemove,
    handleEdit,
    handleIsCompleteChange,
    handleThumbtackChange,
    viewAllTasks,
    viewResultSearch,
    viewForm,
    viewCompltetTasks,
    viewPinnedTasks,
    viewFortodayTasks,
  ] = useTodods();
  return (
    <>
      <header
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.400)",
          color: "white",
          padding: "25px",
          textAlign: "center",
          display: "flex",
        }}
      >
        <div style={{ flex: "6", textAlign: "left" }}>
          <h1>Task management</h1>
        </div>
        <Search onSubmit={viewResultSearch}></Search>
      </header>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="container border"
          style={{ flex: "7", margin: "20px", backgroundColor: "white" }}
        >
          <br />
          {form}
          <br />
          <TodoList
            todos={todos}
            onIsCompleteChange={handleIsCompleteChange}
            onThumbtackChange={handleThumbtackChange}
            onEdit={handleEdit}
            onDelete={handleRemove}
          />
          <br />
        </div>
        <div
          className=" border border"
          style={{
            flex: "2",
            margin: "20px",

            backgroundColor: "white",
          }}
        >
          <br />
          <ButtonsMenu
            onViewForm={viewForm}
            onViewAllTasks={viewAllTasks}
            onViewCompltetTasks={viewCompltetTasks}
            onViewPinnedTasks={viewPinnedTasks}
            onViewFortodayTasks={viewFortodayTasks}
          />
        </div>
      </div>
    </>
  );
}

export default TodoApp;
localStorage.removeItem("todo");
