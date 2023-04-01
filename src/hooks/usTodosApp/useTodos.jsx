import { useState } from "react";
import { useStatePersist } from "./useStatePersist";
import crudTaskActions from "./crudTaskAction";
import setupView from "./setupVies";
export function useTodods() {
  const [alltTodos, setAllTodosAndSave] = useStatePersist("todo", []);
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState("");

  const [
    handleAdd,
    handleRemove,
    handleEdit,
    handleIsCompleteChange,
    handleThumbtackChange,
  ] = crudTaskActions(alltTodos, todos, setAllTodosAndSave, setTodos, setForm);

  const [
    viewAllTasks,
    viewCompltetTasks,
    viewPinnedTasks,
    viewFortodayTasks,
    viewResultSearch,
    viewForm,
  ] = setupView(alltTodos, setTodos, setForm, handleAdd);

  return [
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
  ];
}

