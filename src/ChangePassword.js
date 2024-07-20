import NavBar from './NavBar';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updatePassword, onAuthStateChanged } from "firebase/auth";

function ChangePassword() {
	const nav = useNavigate();
	
	useEffect(() => {
		let em = localStorage.getItem("email");
		if (em == null) {
			nav("/login");
		}
	}, [nav]);

	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");
	const [msg, setMsg] = useState("");

	const hPassword1 = (event) => { setPassword1(event.target.value); }
	const hPassword2 = (event) => { setPassword2(event.target.value); }

	const change = (event) => {
		event.preventDefault();
		if (password1 !== password2) {
			setMsg("Passwords do not match.");
			return;
		}
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				updatePassword(user, password1)
					.then(() => {
						localStorage.removeItem("email");
						nav("/");
					})
					.catch(err => setMsg("Issue: " + err.message));
			} else {
				setMsg("No user is signed in.");
			}
		});
	}

	return (
		<>
			<NavBar />
			<center>
				<h1>Change Password Page</h1>
				<form onSubmit={change}>
					<label>New Password:  </label>
					<input type="password" placeholder="Enter new password" onChange={hPassword1} value={password1} />
					<br /> <br />
					<label>Confirm New Password:  </label>
					<input type="password" placeholder="Enter new password again" onChange={hPassword2} value={password2} />
					<br /> <br />
					<input type="submit" value="Change" />
				</form>
				<h2>{msg}</h2>
			</center>
		</>
	);
}

export default ChangePassword;
