export function ButtonsMenu(props) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button className="btn btn-light" onClick={props.onViewForm}>
          add task
        </button>
        <br />
        <button className="btn btn-light " onClick={props.onViewAllTasks}>
          All tasks
        </button>
        <br />
        <button className="btn btn-light " onClick={props.onViewPinnedTasks}>
          Pinned tasks
        </button>
        <br />
        <button className="btn btn-light " onClick={props.onViewCompltetTasks}>
          Completed tasks
        </button>
        <br />
        <button className="btn btn-light" onClick={props.onViewFortodayTasks}>
          For today
        </button>
        <br />
      </div>
    </>
  );
}
