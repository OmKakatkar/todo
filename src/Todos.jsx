import './index.css';
import { useState } from "react";
import { auth, firestore } from "./firebase";
import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Todos = () =>
{
  const [todo, setTodo] = useState("");
  // const todoRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);

  const todoRef = firestore.collection(`users/zODXl6igixgQ3ddrG8BLJ1ZPdhl2/todos`);

  const [todos] = useCollectionData(todoRef, { idField: "id" });

  const signOut = () => auth.signOut();

  const onSubmitTodo = (event) =>
  {
    event.preventDefault();

    setTodo("");
    todoRef.add({
      text: todo,
      complete: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  };

  return (
    <>
      <header>
        {/* <button onClick={signOut} className="btn btn-primary" id="btn-sign-out">
          Sign Out
        </button> */}
        <h1 className="txt-todo">Welcome to the To-Do App </h1>
        <h4 className="txt-todo">Add some things below to get started and orgainse your day.</h4>
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
};

const Todo = ({ id, complete, text }) =>
{
  // const todoRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
  const todoRef = firestore.collection(`users/zODXl6igixgQ3ddrG8BLJ1ZPdhl2/todos`);
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
};

export default Todos;
