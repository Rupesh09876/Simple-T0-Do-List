import React, { useState } from "react";
import Addtodos from "./Addtodos";

export default function Content() {
  const [todos, settodos] = useState([
    {
      srno: 1,
      title: "example",
      description: "this is to-do example",
    },
  ]);

  const deletenode = (todo) => {
    console.log("button clicked", todo);
    settodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (todo) => {
    const newTodo = {
      srno: todos.length + 1,
      ...todo,
    };
    settodos([...todos, newTodo]);
  };

  return (
    <>
      <div>
        <Addtodos addTodo={addTodo} />
        <h1 className="text-center my-4">TO-DO LIST</h1>
      </div>
      <div className="todos">
        {" "}
        {/* Removed styles.todos */}
        {todos.length === 0 ? (
          <div className="text-center">No items to display</div>
        ) : (
          todos.map((e) => (
            <div className="text-center" key={e.srno}>
              <div className="todo-item my-3">
                {" "}
                {/* Removed styles["todo-item"] */}
                {e.srno} : {e.title} <br />
                <div className="space">
                  {" "}
                  {/* Removed styles.space */}
                  {e.description}
                  <button
                    onClick={() => deletenode(e)}
                    type="button"
                    className="btn btn-dark btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
