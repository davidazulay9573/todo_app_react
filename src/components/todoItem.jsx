function TodoItem({
  todo: { content, dueDate,dueClock, isComplete, thumbtack, creationDate },
  onIsCompleteChange,
  onThumbtackChange,
  onDelete,
  onEdit,
}) {
  return (
    <li className="list-group-item" style={{ display: "flex" ,padding:'30px' }}>
      <div style={{ flex: 8 }}>
        <input
          className="form-check-input me-2"
          type="checkbox"
          id="firstCheckbox"
          checked={isComplete}
          onChange={(e) => onIsCompleteChange(e.target.checked)}
        />
        <label
          className={`form-check-label ${
            isComplete ? "text-decoration-line-through" : ""
          }`}
          htmlFor="firstCheckbox"
        >
          Mission details: {content}
          <br />
          Due time : 
          <br />
           date : {dueDate} 
            <br />
           clock: {dueClock}
        </label>
      </div>
      <button
        className="btn btn-light"
        onClick={onThumbtackChange}
        disabled={isComplete}
      >
        <i className={` bi bi-pin-angle${thumbtack ? "-fill" : ""}`}></i>
      </button>
      <button className="btn btn-light" onClick={onEdit} disabled={isComplete}>
        <i className="bi bi-pencil"></i>
      </button>
      <button className="btn btn-light" onClick={onDelete}>
        <i className=" bi bi-trash3"></i>
      </button>
    </li>
  );
}

export default TodoItem;

/* <button className="btn btn-light">  <i class="bi bi-calendar4-week"></i> </button> */
