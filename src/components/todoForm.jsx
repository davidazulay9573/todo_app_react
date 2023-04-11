import useInput from "../hooks/useInput";

function TodoForm({ onSubmit, buttonTitle, initialValues = {content:"",date: "",clock: ""}}) {
  const [handleInputChange, handleSubmit, error, inputs] = useInput(
    initialValues,
    onSubmit,
  (inputs) =>
      inputs.content.length < 2 ? "must be at least 2 characters" : null,
  );

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <input
          name="content"
          value={inputs.content}
          onInput={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          type="text"
          className="form-control"
          placeholder="I need to"
        />
        {error ? <div className="text-danger">{error}</div> : null}
      </div>
      <br />
      <span className="input-group-text">You can specify a due time </span>
      <div style={{ display: "flex" }}>
        <input
          name="date"
          type="date"
          value={inputs.date}
          onInput={handleInputChange}
          className="form-control"
        />
        <input
          name="clock"
          type="time"
          value={inputs.clock}
          onInput={handleInputChange}
          className="form-control"
        />
      </div>
      <br />
      <button onClick={handleSubmit} className="btn btn-dark">
        {buttonTitle}
      </button>
    </div>
  );
}

export default TodoForm;
