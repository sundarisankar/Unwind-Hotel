import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import axios from 'axios'; // Ensure axios is imported
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 300,
    });
  }, []);

  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Sample validation logic (can be expanded)
    if (!name || !email || !phone || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    axios
      .post('http://localhost:4000/signup/signup', {
        name,
        email,
        phone,
        password,
      })
      .then((result) => {
        if (result.data.errors) {
          result.data.errors.forEach((error) => {
            toast.error(error.msg || 'An error occurred');
          });
        } else {
          toast.success('Registered Successfully', {
            onClose: () => navigate('/login'), // Navigate to login after success
          });
        }
      })
      .catch((err) => {
        toast.error('User already registered');
        console.log(err);
      });
  };

  return (
    <>
      <div className="back-img-login">
      <ToastContainer />
        <div style={{ backgroundColor: ' #2222227d', height: '100vh' }}>
          <Row className="justify-content-md-center">
            <h1
              style={{
                textAlign: 'center',
                marginTop: '5vh',
                fontFamily: 'fantasy',
                color: 'rgb(231, 224, 224)',
              }}
              data-aos="flip-left"
            >
              CREATE AN ACCOUNT
            </h1>
            <h5
              style={{ color: 'rgb(231, 198, 154)', textAlign: 'center' }}
              data-aos="zoom-in"
            >
              Join Now!
            </h5>
            <Col md={4}></Col>
            <Col
              md={4}
              className="unwind-signup"
              style={{ marginTop: '15vh' }}
              data-aos="zoom-in"
            >
              <h2 style={{ fontFamily: 'cursive', textAlign: 'center', color: 'white' }}>
                Signup
              </h2>
              <Form onSubmit={handleSignup}>
                <Form.Group controlId="formname">
                  <Form.Label style={{ color: 'white' }}>
                    <FaUser style={{ fontSize: '13px' }} /> Username
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label style={{ color: 'white' }}>
                    <FaEnvelope style={{ fontSize: '13px' }} /> Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPhone" className="mt-3">
                  <Form.Label style={{ color: 'white' }}>
                    <FaPhone style={{ fontSize: '13px' }} /> Phone Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                  <Form.Label style={{ color: 'white' }}>
                    <IoIosLock style={{ fontSize: '13px' }} /> Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="signup-button mt-3">
                  Signup
                </Button>
              </Form>
              <div className="switch-action mt-3" style={{ color: 'white' }}>
                Already have an account?{' '}
                <span
                  onClick={() => navigate('/login')}
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Login Here
                </span>
              </div>
            </Col>
            <Col md={4}></Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Signup;
