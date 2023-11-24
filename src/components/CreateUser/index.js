import React, { useState } from "react";
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
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/user-not-found") {
        console.error("User not found:", errorMessage);
      } else if (errorCode === "auth/wrong-password") {
        console.error("Wrong password:", errorMessage);
      } else {
        console.error("Login error:", errorMessage);
      }
    });

  const handleRegister = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      history("/login");
    } catch (error) {
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
