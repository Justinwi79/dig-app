import React, { useState } from "react";
//import { auth } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./CreateUser.css";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      //const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      if (errorCode === "auth/user-not-found") {
        // Handle user not found error
        console.error("User not found:", errorMessage);
      } else if (errorCode === "auth/wrong-password") {
        // Handle wrong password error
        console.error("Wrong password:", errorMessage);
      } else {
        // Handle other errors
        console.error("Login error:", errorMessage);
      }
    });

  const handleRegister = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // Redirect to the main page after successful registration
      history("/login");
    } catch (error) {
      // Handle registration error
    }
  };

  return (
    <div className="create-user-container">
      <h1>Create User</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default CreateUser;
