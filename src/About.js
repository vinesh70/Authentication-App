import NavBar from './NavBar';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './css/About.css';

function About()
{

	const nav = useNavigate();
	useEffect( ()=>{
		let em = localStorage.getItem("email");
		if(em == null)			
			nav("/login");
	},[]);
	
	return(
		<>
		<NavBar/>
		<center>
			<h1>About XYZ Company</h1>
			<div className="update-item">
			<p>Welcome to XYZ Company, where innovation meets excellence. Established in 1998, XYZ Company has grown to become a leading provider of services in the industry. Our mission is to deliver high-quality solutions that not only meet but exceed our clients' expectations, fostering long-term relationships built on trust and satisfaction.</p>
			</div>
		</center>
		</>
	);
}

export default About;