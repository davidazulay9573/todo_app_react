import { useState } from "react";

export function Search({ onSubmit }) {
  const [input, setInput] = useState('');
  return (
    <div style={{ display: "flex", flex: "4" }}>
      <input
        className="form-control "
        type="search"
        placeholder="Search"
        value={input}
        onInput={(e) => {setInput(e.target.value)}}
        onKeyUp={() => onSubmit(input)}
      />
      <button className="btn btn-light " onClick={() => onSubmit(input)}>
        <i className="W-20 bi bi-search"></i>
      </button>
    </div>
  );
}
