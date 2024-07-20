import NavBar from './NavBar';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
import app from "./Firebase";

function ForgotPassword()
{

	const nav = useNavigate();
	const [email, setEmail] = useState();
	const hEmail = (event) => { setEmail(event.target.value); }	

	useEffect( ()=>{

		let em = localStorage.getItem("email");
		if(em != null)			
			nav("/home");

	},[]);

	const sm = (event) => {
		event.preventDefault();
		const auth = getAuth();
		sendPasswordResetEmail(auth,email)
		.then(res=> nav("/"))
		.catch(err=> alert("issue" + err));
	}

	return(
		<>
		<NavBar/>
		<center>
			<h1>ForgotPassword Page</h1>
			<form onSubmit={sm}>
				<label>Email:  </label>
				<input type="email" placeholder="Enter your Registered Email" onChange={hEmail} />
				<br/> <br/>
				<input type="submit"  />
			</form>
		</center>
		</>
	);
}

export default ForgotPassword;