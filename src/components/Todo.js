import React from "react";
import { firestore } from "../firebase/firebase";

function Todo({ id, complete, text }) {
  const todoRef = firestore.collection(
    `users/zODXl6igixgQ3ddrG8BLJ1ZPdhl2/todos`
  );
  const onCompleteTodo = (id, complete) =>
    todoRef.doc(id).set({ complete: !complete }, { merge: true });

  const onDeleteTodo = (id) => todoRef.doc(id).delete();

  return (
    <div key={id} className="todo">
      <button
        className={`todo-item ${complete ? "complete" : ""} btn-todo`}
        tabIndex="0"
        onClick={() => onCompleteTodo(id, complete)}
      >
        {text}
      </button>
      <button onClick={() => onDeleteTodo(id)} className="btn btn-del">
        <span role="img" aria-label="cross">
          ❌
        </span>
      </button>
    </div>
  );
}

export default Todo;
