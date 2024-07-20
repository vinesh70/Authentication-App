import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './Firebase'; // Ensure these are exported from Firebase.js
import NavBar from './NavBar';
import { useAuthState } from 'react-firebase-hooks/auth';
import './css/Login.css'; // Importing the CSS file

function Login() {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    // Redirect to home if user is already authenticated
    useEffect(() => {
        const user = localStorage.getItem("email");
        if (user) {
            navigate("/home");
        }
    }, [navigate]);

    const handleEmailChange = (event) => { setEmail(event.target.value); };
    const handlePasswordChange = (event) => { setPassword(event.target.value); };

    const handleAuth = async (event) => {
        event.preventDefault();

        if (email.trim() === "") {
            alert("Please enter an email first");
            setMsg("");
            emailRef.current.focus();
            return;
        }

        if (password === "") {
            alert("Please enter a password first");
            setMsg("");
            passwordRef.current.focus();
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem("email", email);
            navigate("/home");
        } catch (err) {
            setMsg("Issue " + err.message);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            const user = auth.currentUser;
            if (user) {
                localStorage.setItem("email", user.email);
                navigate("/home");
            }
        } catch (error) {
            console.error("Error signing in with Google: ", error);
        }
    };

    const [user, loading] = useAuthState(auth);

    return (
        <>
            <NavBar />
            <div className="centered-content">
                <h1>Login Page</h1>
                <form onSubmit={handleAuth}>
                    <label>Email: </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        onChange={handleEmailChange}
                        ref={emailRef}
                        value={email}
                    />
                    <label>Password: </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        onChange={handlePasswordChange}
                        ref={passwordRef}
                        value={password}
                    />
                    <input type="submit" value="Login" />
                </form> <br/>
		<div>or</div>
		<br/>
                <button onClick={signInWithGoogle}>Sign in with Google</button>
                
                <h2>{msg}</h2>
            </div>
        </>
    );
}

export default Login;
