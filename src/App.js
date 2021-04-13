import './index.css';
import Todos from "./Todos";
import logo from "./logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import firebase from "firebase/app";

const signInWithGoogle = () =>
  auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .catch(function (error) {
      let errorMessage = error.message;

      console.log(errorMessage);
    });

const SignIn = () => (
  <main>
    <h1>To-do</h1>
    <img src={logo} alt="" className="logo" />
    {/* <button
      onClick={signInWithGoogle}
      className="btn btn-primary"
      id="btn-sign-in"
    >
      Sign In With Google
    </button> */}
  </main>
);

const App = () => {

  // return user ? <Todos /> : <SignIn />;
  return <Todos />;
};

export default App;
