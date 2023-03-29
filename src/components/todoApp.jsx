import { useState } from "react";
import TodoForm from "./todoForm";
import { TodoUI } from "./todoUI";
import { v4 as uuid } from "uuid";

let getTodosFromLS = JSON.parse(localStorage.getItem("todos")) || [];
const setTodosToLS = () => {
  let todosstringy = JSON.stringify(getTodosFromLS);
  localStorage.setItem("todos", todosstringy);
};

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState("");

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
    getTodosFromLS.push(NewTodo);
    setTodosToLS();
  };

  const handleRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    getTodosFromLS = getTodosFromLS.filter((todo) => todo.id !== id);
    setTodosToLS();
  };

  const handleEdit = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setTodos([todo]);
    const upDateValuse = (input) => {
      todo.content = input.content;
      todo.dueDate = input.date;
      todo.dueClock = input.clock;
      setTodos([todo]);
      setTodosToLS();
      setForm("");
    };
    setForm(
      <TodoForm
        className="border"
        onSubmit={upDateValuse}
        targetValues={todo}
        buttonTitle={"Edit"}
      />
    );
  };

  const handleSearch = (input) => {
    setForm(" ");
    let mapTodos = [];
    getTodosFromLS.map((todo) => {
      if (todo.content.includes(input) && input !== " ") {
        mapTodos.push(todo);
      }
      return todo;
    });
    setTodos(mapTodos);
  };

  const handleIsCompleteChange = (id, isComplete) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete,
            thumbtack: false,
          };
        }
        return todo;
      })
    );
    getTodosFromLS = getTodosFromLS.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete,
          thumbtack: false,
        };
      }
      return todo;
    });
    setTodosToLS();
  };

  const handleThumbtackChange = (id, thumbtack) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            thumbtack,
          };
        }
        return todo;
      })
    );
    getTodosFromLS = getTodosFromLS.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          thumbtack,
        };
      }
      return todo;
    });

    setTodosToLS();
  };

  const viewForm = () => {
    setTodos([]);
    setForm(
      <TodoForm
        className="border"
        onSubmit={handleAdd}
        targetValues={{ content: "", dueDate: "", dueClock: "" }}
        buttonTitle={"Add"}
      />
    );
  };

  const viewAllTasks = () => {
    setTodos(getTodosFromLS.reverse());
    setForm("");
  };

  const viewCompltetTasks = () => {
    setTodos(getTodosFromLS.filter((todo) => todo.isComplete));
  };
  const viewPinnedTasks = () => {
    setTodos(getTodosFromLS.filter((todo) => todo.thumbtack));
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
    setForm('')
    setTodos(getTodosFromLS.filter((todo) => todo.dueDate === formattedToday));
  };
  return (
    <TodoUI
      todos={todos}
      form={form}
      handleRemove={handleRemove}
      handleEdit={handleEdit}
      handleSearch={handleSearch}
      handleIsCompleteChange={handleIsCompleteChange}
      handleThumbtackChange={handleThumbtackChange}
      viewForm={viewForm}
      viewAllTasks={viewAllTasks}
      viewCompltetTasks={viewCompltetTasks}
      viewPinnedTasks={viewPinnedTasks}
      viewFortodayTasks={viewFortodayTasks}
    ></TodoUI>
  );
}

export default TodoApp;
// localStorage.removeItem('todos')
