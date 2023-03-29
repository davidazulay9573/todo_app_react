import TodoList from "./todoList";
import { ButtonsMenu } from "./ButtonMenu";
import { Search } from "./search";
export function TodoUI(props){
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
          <Search onSubmit={props.handleSearch}></Search>
        </header>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="container border"
            style={{ flex: "7", margin: "20px", backgroundColor: "white" }}
          >
            <br />
            {props.form}
            <br />
            <TodoList
              todos={props.todos}
              onIsCompleteChange={props.handleIsCompleteChange}
              onThumbtackChange={props.handleThumbtackChange}
              onEdit={props.handleEdit}
              onDelete={props.handleRemove}
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
              onViewForm={props.viewForm}
              onViewAllTasks={props.viewAllTasks}
              onViewCompltetTasks={props.viewCompltetTasks}
              onViewPinnedTasks={props.viewPinnedTasks}
              onViewFortodayTasks={props.viewFortodayTasks}
            />
          </div>
        </div>
      </>
    );
}