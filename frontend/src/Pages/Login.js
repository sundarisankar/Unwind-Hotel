import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Ensure axios is imported

function Login() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration
      easing: "ease-in-out",
      delay: 300,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/signup/login", { email, password })
      .then((res) => {
        // Check if the response contains user details
        if (res.data) {
          console.log("logindetails", res.data);
          // Store the user details in localStorage
          const userId = res.data.userId;
          const userName = res.data.userName;
          const email = res.data.email;

          // Store user data in localStorage
          localStorage.setItem("id", userId);
          localStorage.setItem("userName", userName);
          localStorage.setItem("email", email);

          // Display success toast and navigate
          toast.success("Login Successful", {
            onClose: () => {
              navigate("/home"); // Adjust route as needed
            },
          });
        } else {
          // If user not found, display error toast
          toast.error("User not found");
        }
      })
      .catch((error) => {
        // Handle errors such as invalid credentials
        toast.error( error.response?.data?.message ||"Wrong Password");
        console.error("Login error:", error); // For debugging purposes
      });
  };

  return (
    <>
      <div className="back-img-login">
        <ToastContainer />
        <div style={{ backgroundColor: " #2222227d", height: "100vh" }}>
          <Row className="justify-content-md-center">
            <h1
              style={{
                textAlign: "center",
                marginTop: "5vh",
                fontFamily: "fantasy",
                color: "rgb(231, 224, 224)",
              }}
              data-aos="flip-left"
            >
              WELCOME TO UNWIND
            </h1>

            <h5
              style={{ color: "rgb(231, 198, 154)", textAlign: "center" }}
              data-aos="zoom-in"
            >
              BOOK NOW
            </h5>
            <Col md={4}></Col>
            <Col
              md={4}
              className="unwind-book"
              style={{ marginTop: "15vh" }}
              data-aos="zoom-in"
            >
              <h2
                style={{
                  fontFamily: "cursive",
                  textAlign: "center",
                  color: "white",
                }}
              >
                Login
              </h2>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formemail">
                  <Form.Label style={{ color: "white" }}>
                    <FaUser style={{ fontSize: "13px" }} /> Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                  <Form.Label style={{ color: "white" }}>
                    <IoIosLock style={{ fontSize: "15px" }} /> Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="login-button2"
                >
                  Login
                </Button>
              </Form>
              <div className="switch-action">
                New to UNWIND? Create{" "}
                <span onClick={() => navigate("/signup")}>user account</span>
              </div>
            </Col>
            <Col md={4}></Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Login;
