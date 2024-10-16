import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [userName, setUserName] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const name = localStorage.getItem("userName");
        if (name) {
            setUserName(name);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");
        setUserName("");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar className={isScrolled ? 'navbar scrolled' : 'navbar'} variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="nav-brand">
                    <b style={{ fontSize: "30px", fontFamily: "sans-serif" }}>UNWIND </b>
                    <p style={{ fontSize: "15px", fontFamily: "sans-serif", fontWeight: "500" }}>HOTEL BOOKING</p>
                </Navbar.Brand>

                <Nav className="nav_items justify-content-center me-auto">
                    <Link to="/home" className='nav-head'>Home</Link>
                    <Link to="/about" className='nav-head'>About</Link>
                    <Link to="/rooms" className='nav-head'>Rooms</Link>
                    <Link to="/blog" className='nav-head'>Blog</Link>
                    <Link to="/contact" className='nav-head'>Contact</Link>
                </Nav>

                <Nav className="ms-auto">
                    {userName ? (
                        <div className="d-flex justify-content-end align-items-center user-actions">
                            <span className="user-greeting">Hello, {userName}</span>
                            <Button onClick={handleLogout} className="logout-btn">
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <Link to="/login" className="login-btn">
                            <Button variant="outline-light">Login</Button>
                        </Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
