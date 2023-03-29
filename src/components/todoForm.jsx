import { useState } from "react";

function TodoForm({ onSubmit, buttonTitle, targetValues }) {
  const [input, setInput] = useState(  { 
     content: targetValues.content, 
      date: targetValues.dueDate,
      clock: targetValues.dueClock,
    }
  );
  const [error, setError] = useState(null);
  const handleInputChange = (e) => {
    setInput({ ...input, content: e.target.value });
    setError(null);
  };

  const handleSubmit = () => {
    if (input.content.length < 2) {
      setError("Input is required for at least two characters");
      return;
    }
    onSubmit(input);
    setInput({ content: "", date: " ? ", clock: " ? " });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <input
          value={input.content}
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
          value={input.date}
          onInput={(e) => setInput({ ...input, date: e.target.value })}
          className="form-control"
          type="date"
        />
        <input
          value={input.clock}
          onInput={(e) => setInput({ ...input, clock: e.target.value })}
          className="form-control"
          type="time"
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
