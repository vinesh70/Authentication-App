import NavBar from './NavBar';
import { useState, useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './css/Signup.css'; // Importing the CSS file

function Signup() {

    const nav = useNavigate();
    useEffect(() => {
        let em = localStorage.getItem("email");
        if (em != null)
            nav("/home");
    }, []);

    const rEmail = useRef();
    const rPassword = useRef();
    const rConfirmPassword = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [msg, setMsg] = useState("");

    const hEmail = (event) => { setEmail(event.target.value); }
    const hPassword = (event) => { setPassword(event.target.value); }
    const hConfirmPassword = (event) => { setConfirmPassword(event.target.value); }

    const save = (event) => {
        event.preventDefault();

        if (email.trim() === "") {
            alert("Please enter an email first");
            setMsg("");
            rEmail.current.focus();
            return;
        }

        if (password === "") {
            alert("Please enter a password first");
            setMsg("");
            rPassword.current.focus();
            return;
        }

        if (confirmpassword === "") {
            alert("Please enter the confirm password");
            setMsg("");
            rConfirmPassword.current.focus();
            return;
        }

        if (password === confirmpassword) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(res => nav('/login'))
                .catch(err => setMsg("Issue " + err));
        } else {
            alert("Password and Confirm Password do not match. Please enter again!");
            setPassword("");
            setConfirmPassword("");
            rPassword.current.focus();
        }
    }

    return (
        <>
            <NavBar />
            <div className="centered-content">
                <h1>Signup Page</h1>
                <form onSubmit={save}>
                    <label>Email: </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        onChange={hEmail}
                        ref={rEmail}
                        value={email}
                    />
                    <label>Password: </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        onChange={hPassword}
                        ref={rPassword}
                        value={password}
                    />
                    <label>Confirm Password: </label>
                    <input
                        type="password"
                        placeholder="Enter password again"
                        onChange={hConfirmPassword}
                        ref={rConfirmPassword}
                        value={confirmpassword}
                    />
                    <input type="submit" value="Register" />
                </form>
                <h2>{msg}</h2>
            </div>
        </>
    );
}

export default Signup;
