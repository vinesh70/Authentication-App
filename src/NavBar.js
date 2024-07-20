import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './css/NavBar.css';

function NavBar() {
    const [email, setEmail] = useState("");

    useEffect(() => {
        setEmail(localStorage.getItem("email"));
    }, []);

    return (
        <center>
            <div className="nav">
                {(email == null) && <Link to="/">Login</Link>}
                {(email == null) && <Link to="/signup">Signup</Link>}
                {(email == null) && <Link to="/fp">ForgotPassword</Link>}

                {(email != null) && <Link to="/home">Home</Link>}
                {(email != null) && <Link to="/about">About</Link>}
                {(email != null) && <Link to="/cp">ChangePassword</Link>}
                {(email != null) && <Link to="/cu">Contact Us</Link>}
            </div>
        </center>
    );
}

export default NavBar;
