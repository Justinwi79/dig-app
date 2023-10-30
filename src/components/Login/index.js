import React, { useState } from "react";
import "./Login.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Google2 from "../assets/GoogleP.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleEmailPasswordLogin = async () => {
    try {
      const auth = getAuth(); // Get the authentication instance
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      // Handle login error
      const errorMessage = error.message;
      console.error("Login error:", errorMessage);
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error) {
      const errorMessage = error.message;
      console.error("Google login error:", errorMessage);
    }
  };

  return (
    <body>
      <div className="login-container">
        <h1 className="heading">Sign In!</h1>
        <input
          className="input1"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input1"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}
        <button onClick={handleEmailPasswordLogin} className="login-button">
          Login with Email
        </button>
        

        <div class="separator">or</div>

        <button onClick={handleGoogleLogin} className="google-button">
          <img src={Google2} alt="GoogleP" className="google-icon" />
          Login with Google
        </button>

        <div className="horizontal-line"></div>
      </div>
    </body>
  );
}

export default Login;
