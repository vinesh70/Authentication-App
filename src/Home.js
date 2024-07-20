import NavBar from './NavBar';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './css/Home.css'; // Importing the CSS file
import Contactus from './Contactus';

function Home() {
    const nav = useNavigate();
    const [msg, setMsg] = useState("");

    useEffect(() => {
        let em = localStorage.getItem("email");
        if (em == null) {
            nav("/");
        } else {
            setMsg("Welcome, " + em);
        }
    }, [nav]);

    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem("email");
        nav("/login");
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <header className="home-header">
                    <h1>{msg}</h1>
                    <p>At XYZ Company, we believe in transforming possibilities into realities. Founded on the principles of innovation, integrity, and customer satisfaction, we have dedicated ourselves to delivering top-notch products and services that meet the evolving needs of our clients.</p>
                </header>
                <section className="updates">
                    <h2>Recent Updates</h2>
                    <div className="update-item">
                        <h3>Product Launch</h3>
                        <p>We are excited to announce the launch of our new product line. Explore innovative features and enhancements that will transform your experience.</p>
                    </div>
                    <div className="update-item">
                        <h3>Upcoming Webinar</h3>
                        <p>Join our upcoming webinar on industry trends and best practices. Register now to secure your spot and gain valuable insights from our experts.</p>
                    </div>
                    <div className="update-item">
                        <h3>Customer Spotlight</h3>
                        <p>Read about how our solutions have empowered businesses to achieve their goals. Check out our customer spotlight feature to learn more.</p>
                    </div>
                </section>
                <section className="cta">
                    <h2>Get Started with Us</h2>
                    <p>Ready to experience the difference? Contact us today to get started on your journey with XYZ Company.</p>
        
                </section>
                <form onSubmit={logout} className="logout-form">
			<center>
                    <input type="submit" value="Logout" />
			</center>
                </form>
            </div>
        </>
    );
}

export default Home;
