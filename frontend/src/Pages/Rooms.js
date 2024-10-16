import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "aos/dist/aos.css";
import AOS from "aos";
import "../CSS Pages/Rooms.css";
import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { MdKeyboardArrowRight, MdOutlineHealthAndSafety } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Pagination } from "antd";
import { CiWifiOn } from "react-icons/ci";
import { FaPersonShelter } from "react-icons/fa6";
import { BiSwim } from "react-icons/bi";
import { IoRestaurant } from "react-icons/io5";
import { TbBrandBooking } from "react-icons/tb";
import Footer from "./Footer";
import Header from "./Header";

function Rooms() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const navigate = useNavigate();
  const handleBookNowClick = () => {
    navigate('/roomlist');  // Navigates to the RoomList path
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
    });
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="navBar_divClass-room">
        <Row className="image-home-room">
          <Col lg={12}>
            <Navbar data-bs-theme="dark">
              <Header />
              {/* <Container>
                  <Navbar.Brand href="/"><b style={{ fontSize: "30px", fontFamily: "sans-serif" }}>UNWIND </b><p style={{ fontSize: "15px", fontFamily: "sans-serif", fontWeight: "500" }}>HOTEL BOOKING</p></Navbar.Brand>
                  <Nav className="navbar me-auto">


                    <a href="/" className='nav-head'>Home</a>
                    <a href="About" className='nav-head'>About </a>
                    <a href="Rooms" className='nav-head'>Rooms</a>
                    <a href="Blog" className='nav-head'>Blog </a>
                    <a href="Contact" className='nav-head'>Contact</a>

                  </Nav>
                </Container> */}
            </Navbar>

            <p className="center-home-about" data-aos="fade-up">
              <div className="center-home-one-about">
                {" "}
                Home
                <MdKeyboardArrowRight />
                &nbsp;Rooms
                <MdKeyboardArrowRight />
              </div>
              <div className="center-home-two-about-room">ROOMS</div>
            </p>
            <div></div>
          </Col>
        </Row>
      </div>

      <div className="nav-navbar">
        <Row className="rectangle">
          <Col lg={1} className="rec-angle-one"></Col>
          <Col lg={2} className="rec-angle-one">
            <b style={{ color: "white" }}>
              CHECK-IN
              <p style={{ color: "gray", marginTop: "2vh" }}>
                <FaCalendarAlt /> CHECK-IN DATE
              </p>
            </b>
          </Col>
          <Col lg={2} className="rec-angle-one">
            <b style={{ color: "white" }}>
              CHECK-OUT
              <p style={{ color: "gray", marginTop: "2vh" }}>
                <FaCalendarAlt /> CHECK-OUT DATE
              </p>
            </b>
          </Col>

          <Col lg={2} className="rec-angle-one">
            <b style={{ color: "white", marginLeft: "1vh" }}>
              ROOMS
              <p style={{ color: "gray", marginTop: "5px", fontSize: "17px" }}>
                <RiArrowDropDownLine style={{ fontSize: "6vh" }} />
                Suite
              </p>
            </b>
          </Col>

          <Col lg={2} className="rec-angle-one">
            <b style={{ color: "white", marginLeft: "1vh" }}>
              GUEST
              <p style={{ color: "gray", marginTop: "5px", fontSize: "17px" }}>
                <RiArrowDropDownLine style={{ fontSize: "6vh" }} />1 Person
              </p>
            </b>
          </Col>

          <Col lg={3} className="rec-angle-two">
            <Row>
              <Col lg={3}></Col>
              <Col
                lg={5}
                style={{ fontSize: "3vh", color: "white", fontWeight: "500" }}
              >
                <b style={{ marginLeft: "4vh" }}>CHECK </b>AVAILABILITY
              </Col>
              <Col lg={4}></Col>
            </Row>
          </Col>
        </Row>
      </div>

      <Container>
        <Row style={{ marginTop: "10vh" }}>
          <Col lg={4}>
            <div className="suiteroom-one">
              <Container style={{ paddingTop: "7vh" }}>
                <h3 className="suite-title">Single Room</h3>
                <p className="cont-suite">
                A room with one single bed, typically for one person.
                <b> Best For:</b> Solo travelers or business travelers.
                </p>
                <p>
                  {" "}
                  <b className="dollar-night">$1500 / NIGHT </b>{" "}
                  <em className="book-now-suit" onClick={handleBookNowClick} style={{ cursor: 'pointer' }}>
        BOOK NOW
      </em>
                </p>
              </Container>
            </div>
            <div style={{ width: "56vh", height: "40vh" }}>
              <Image
                src="https://preview.colorlib.com/theme/unwind/images/room-3.jpg.webp"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="100"
                style={{ width: "56vh", height: "40vh" }}
              />
            </div>
          </Col>
          <Col lg={4}>
            <div style={{ width: "56vh", height: "40vh", marginTop: "3vh" }}>
              <Image
                src="https://preview.colorlib.com/theme/unwind/images/room-2.jpg.webp"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="100"
                style={{ width: "56vh", height: "40vh" }}
              />
            </div>
            <div className="suiteroom-one-one">
              <Container style={{ paddingTop: "7vh" }}>
                <h3 className="suite-title">Deluxe Room</h3>
                <p className="cont-suite">
                A larger and more luxurious room with upgraded furnishings, amenities, and often a better view.
                <b> Best For:</b> Guests looking for added comfort.
                </p>
                <p>
                  {" "}
                  <b className="dollar-night">$4000 / NIGHT </b>{" "}
                  <em className="book-now-suit" onClick={handleBookNowClick} style={{ cursor: 'pointer' }}>
        BOOK NOW
      </em>
                </p>
              </Container>
            </div>
          </Col>
          <Col lg={4}>
            <div className="suiteroom-one">
              <Container style={{ paddingTop: "7vh" }}>
                <h3 className="suite-title">Double Room</h3>
                <p className="cont-suite">
                A room with one double bed or two single beds for two people.
                <b> Best For:</b> Couples or friends traveling together.
                </p>
                <p>
                  {" "}
                  <b className="dollar-night">$2500 / NIGHT </b>{" "}
                  <em className="book-now-suit" onClick={handleBookNowClick} style={{ cursor: 'pointer' }}>
        BOOK NOW
      </em>
                </p>
              </Container>
            </div>
            <div style={{ width: "56vh", height: "40vh" }}>
              <Image
                src="https://preview.colorlib.com/theme/unwind/images/room-1.jpg.webp"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="100"
                style={{ width: "56vh", height: "40vh" }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row style={{ marginTop: "10vh" }}>
          <Col lg={4}>
            <div className="suiteroom-one">
              <Container style={{ paddingTop: "7vh" }}>
                <h3 className="suite-title">Family Room</h3>
                <p className="cont-suite">
                A room designed to accommodate a family, often with multiple beds or larger space to fit more guests.
                <b> Best For:</b> Families with children.
                </p>
                <p>
                  {" "}
                  <b className="dollar-night">$5000 / NIGHT </b>{" "}
                  <em className="book-now-suit" onClick={handleBookNowClick} style={{ cursor: 'pointer' }}>
        BOOK NOW
      </em>
                </p>
              </Container>
            </div>
            <div style={{ width: "56vh", height: "40vh" }}>
              <Image
                src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="100"
                style={{ width: "56vh", height: "40vh" }}
              />
            </div>
          </Col>
          <Col lg={4}>
            <div style={{ width: "56vh", height: "40vh", marginTop: "3vh" }}>
              <Image
                src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=600"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="100"
                style={{ width: "56vh", height: "40vh" }}
              />
            </div>
            <div className="suiteroom-one-one">
              <Container style={{ paddingTop: "7vh" }}>
                <h3 className="suite-title">Luxury Room / VIP Room</h3>
                <p className="cont-suite">
                A top-tier room offering the best views, luxury bedding, advanced technology, and exclusive amenities.
                <b> Best For:</b> High-end travelers looking for the best hotel experience.
                </p>
                <p>
                  {" "}
                  <b className="dollar-night">$7500 / NIGHT </b>{" "}
                  <em className="book-now-suit" onClick={handleBookNowClick} style={{ cursor: 'pointer' }}>
        BOOK NOW
      </em>
                </p>
              </Container>
            </div>
          </Col>
          <Col lg={4}>
            <div className="suiteroom-one">
              <Container style={{ paddingTop: "7vh" }}>
                <h3 className="suite-title">Executive Room</h3>
                <p className="cont-suite">
                Similar to a deluxe room but may come with additional work-related amenities like a desk, free Wi-Fi, and access to business facilities.
                <b> Best For:</b> Business travelers.
                </p>
                <p>
                  {" "}
                  <b className="dollar-night">$6000 / NIGHT </b>{" "}
                  <em className="book-now-suit" onClick={handleBookNowClick} style={{ cursor: 'pointer' }}>
        BOOK NOW
      </em>
                </p>
              </Container>
            </div>
            <div style={{ width: "56vh", height: "40vh" }}>
              <Image
                src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="100"
                style={{ width: "56vh", height: "40vh" }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Pagination
        align="center"
        defaultCurrent={1}
        total={50}
        style={{ marginTop: "10vh" }}
      />
      <br />

      <hr style={{ marginTop: "10vh" }} />

      <div style={{ marginTop: "10vh", marginBottom: "10vh" }}>
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "3vh",
            color: "rgb(173, 163, 88)",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {" "}
          Unwind Services
        </p>
        <h1
          style={{
            textAlign: "center",
            paddingBottom: "1vh",
            paddingTop: "1vh",
            fontSize: "5vh",
            fontFamily: "cursive",
            fontWeight: "600",
            color: "gray",
          }}
        >
          Explore Our Hotel Services
        </h1>

        <Row data-aos="fade-up">
          <Col lg={2} className="services">
            <CiWifiOn className="wifi" />
            <p className="wifi-alter">WIFI</p>
          </Col>
          <Col lg={2} className="services">
            <TbBrandBooking className="wifi" />
            <p className="wifi-alter">BOOKING</p>
          </Col>
          <Col lg={2} className="services">
            <IoRestaurant className="wifi" />
            <p className="wifi-alter">RESTAURANT</p>
          </Col>
          <Col lg={2} className="services">
            <BiSwim className="wifi" />
            <p className="wifi-alter">SWIMMING</p>
          </Col>
          <Col lg={2} className="services">
            <MdOutlineHealthAndSafety className="wifi" />
            <p className="wifi-alter">HELATH </p>
          </Col>
          <Col lg={2} className="services">
            <FaPersonShelter className="wifi" />
            <p className="wifi-alter">SUPPORT</p>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
}

export default Rooms;
