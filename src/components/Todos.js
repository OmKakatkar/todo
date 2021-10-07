import firebase from "firebase/app";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../firebase/firebase";
import "../index.css";
import Todo from "./Todo";

function Todos() {
  const [todo, setTodo] = useState("");

  // Test Collection
  const todoRef = firestore.collection(
    "users/zODXl6igixgQ3ddrG8BLJ1ZPdhl2/todos"
  );
  
  const [todos] = useCollectionData(todoRef, { idField: "id" });

  const onSubmitTodo = (event) => {
    event.preventDefault();

    setTodo("");
    todoRef.add({
      text: todo,
      complete: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <>
      <header>
        <h1 className="txt-todo">Welcome to the To-Do App </h1>
        <h4 className="txt-todo">
          Add some things below to get started and orgainse your day.
        </h4>
      </header>
      <hr />
      <main>
        <form onSubmit={onSubmitTodo}>
          <input
            required
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="What's Next?"
            className="txt-todo"
          />
          <button type="submit" className="btn btn-add">
            Add
          </button>
        </form>
        {todos && todos.map((todo) => <Todo {...todo} />)}
      </main>
    </>
  );
}

export default Todos;
