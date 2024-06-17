import React, { useState } from "react";

export default function Addtodos({ addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    addTodo({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group my-4">
          <label htmlFor="todoTitle">To-do title</label>
          <input
            type="text"
            className="form-control"
            id="todoTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="todoDescription">To-do description</label>
          <input
            type="text"
            className="form-control"
            id="todoDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add item
        </button>
      </form>
    </div>
  );
}
