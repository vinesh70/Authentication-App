import { useState, useRef, useEffect } from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar';

export default function Contactus() {
    const nav = useNavigate();
    const rName = useRef();
    const rPhone = useRef();
    const rEmail = useRef();
    const rSubject = useRef();
    const rComment = useRef();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [comment, setComment] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        let em = localStorage.getItem("email");
        if (em == null) {
            nav("/");
        }
    }, [nav]);

    const hName = (event) => { setName(event.target.value); };
    const hPhone = (event) => { setPhone(event.target.value); };
    const hEmail = (event) => { setEmail(event.target.value); };
    const hComment = (event) => { setComment(event.target.value); };
    const hSubject = (event) => { setSubject(event.target.value); };

    const save = (event) => {
        event.preventDefault();

	if(name.trim() == ""){
		alert("Name can't be empty");
		setName("");
		rName.current.focus();
	}

	if(phone.trim() == ""){
		alert("Phoneno. can't be empty");
		setPhone("");
		rPhone.current.focus();
	}

	if(email.trim() == ""){
		alert("Email can't be empty");
		setEmail("");
		rEmail.current.focus();
	}

	if(subject.trim() == ""){
		alert("Subject can't be empty");
		setSubject("");
		rSubject.current.focus();
	}

	if(comment.trim() == ""){
		alert("Comment can't be empty");
		setComment("");
		rComment.current.focus();
	}

        let data = { name, phone, email, subject, comment };
        let url = "https://server8-yv70.onrender.com/save";
 
            axios.post(url, data)
                .then(res => {
                    setMsg("We will contact you soon!");
                    setName("");
                    setPhone("");
                    setEmail("");
                    setComment("");
                    setSubject("");
                    rName.current.focus();
                })
                .catch(err => setMsg("Issue " + err));
    }

    return (
        <>
            <center>
		<NavBar/>
                <form onSubmit={save}>
                    <h1>Contact Us Form</h1>
                    <label>Name:</label> &nbsp;
                    <input type="text" placeholder="Enter your name" ref={rName} value={name} onChange={hName} /> <br /> <br />

                    <label>Phone:</label> &nbsp;
                    <input type="number" placeholder="Enter your phone number" ref={rPhone} value={phone} onChange={hPhone} /> <br /> <br />

                    <label>Email ID:</label> &nbsp;
                    <input type="email" placeholder="Enter your email address" ref={rEmail} value={email} onChange={hEmail} /> <br /> <br />

                    <label>Subject:</label> &nbsp;
                    <input type="text" placeholder="Enter subject" ref={rSubject} value={subject} onChange={hSubject} /> <br /> <br />

                    <label>Comments:</label> &nbsp;
                    <textarea placeholder="Enter your comment here" rows={3} cols={30} ref={rComment} value={comment} onChange={hComment}></textarea> <br /> <br />

                    <input type="submit" />
                </form>
                <h2>{msg}</h2>
            </center>
        </>
    );
}
