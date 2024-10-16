import React, { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import '../CSS Pages/Home.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { BiSolidOffer, BiSwim } from 'react-icons/bi';
import { GiPillow } from 'react-icons/gi';
import Footer from './Footer';
import { FaPersonShelter } from 'react-icons/fa6';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { IoRestaurant } from 'react-icons/io5';
import { TbBrandBooking } from 'react-icons/tb';
import { CiWifiOn } from 'react-icons/ci';
import '../CSS Pages/Log.css'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
function Home() {
  const navigate = useNavigate();
  const handleBookNowClick = () => {
    navigate('/roomlist');  // Navigates to the RoomList path
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      delay: '300',
    });
  }, []);
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <div className='navBar_divClass' >
          <Row className='image-home'>
            <Col lg={12}>
              <Navbar data-bs-theme="dark">
                <Header/>
              </Navbar>
              <p className='center-home' data-aos="fade-up">
                <div className="center-home-one" > Enjoy Your Wonderful Holidays With A Great Luxury Experience!</div>
                <div className="center-home-two"> Most Relaxing Place</div>
                <div style={{ textAlign: "center" }}>
                  <Button variant="outline-light" style={{ backgroundColor: "rgb(240, 203, 153)", padding: "8px 20px 8px 20px" }}>Take a  Tour<IoIosArrowRoundForward style={{ color: "white", fontSize: "3vh", marginLeft: "2px" }} /> </Button>
                  <Button variant="outline-light" style={{ padding: "8px 20px 8px 20px", marginLeft: "2vh" }}>Learn More <IoIosArrowRoundForward style={{ color: "rgb(240, 203, 153)", fontSize: "3vh", marginLeft: "2px" }} /></Button>
                </div>
              </p>
              <div></div>
            </Col>
          </Row>
        </div>
        <div className='nav-navbar' >
          <Row className='rectangle'>
            <Col lg={1} className='rec-angle-one'></Col>
            <Col lg={2} className='rec-angle-one'>
              <b style={{ color: "white" }}>CHECK-IN
                <p style={{ color: "gray", marginTop: "2vh" }}><FaCalendarAlt />  CHECK-IN DATE</p>
              </b>
            </Col>
            <Col lg={2} className='rec-angle-one'>
              <b style={{ color: "white" }}>CHECK-OUT
                <p style={{ color: "gray", marginTop: "2vh" }}><FaCalendarAlt /> CHECK-OUT DATE</p >
              </b>
            </Col>
            <Col lg={2} className='rec-angle-one'>
              <b style={{ color: "white", marginLeft: "1vh" }}>ROOMS
                <p style={{ color: "gray", marginTop: "5px", fontSize: "17px" }}><RiArrowDropDownLine style={{ fontSize: "6vh" }} />
                  Suite</p >
              </b>
            </Col>
            <Col lg={2} className='rec-angle-one'>
              <b style={{ color: "white", marginLeft: "1vh" }}>GUEST
                <p style={{ color: "gray", marginTop: "5px", fontSize: "17px" }}><RiArrowDropDownLine style={{ fontSize: "6vh" }} />
                  1 Person</p></b></Col>
            <Col lg={3} className='rec-angle-two'>
              <Row>
                <Col lg={3}></Col>
                <Col lg={5} style={{ fontSize: "3vh", color: "white", fontWeight: "500" }}><b style={{ marginLeft: "4vh" }}>CHECK </b>AVAILABILITY</Col>
                <Col lg={4}></Col>
              </Row>
            </Col>
          </Row>
        </div>
        <Row className='hotel-about' data-aos="fade-up">
          <Col lg={1}></Col>
          <Col lg={5}>
            <Row >
              <Col lg={6} >
                <div className='ablut-cont'>
                  <p style={{ textAlign: "center", marginTop: "3vh" }}>
                    <GiPillow style={{ color: "rgb(225, 189, 142)", fontSize: "12vh" }} />
                  </p>
                  <b style={{ fontFamily: "cursive", display: "flex", justifyContent: "center", alignItems: "center" }}> Cozy Room</b>
                  <p style={{ fontFamily: "cursive", display: "flex", textAlign: "center", color: "rgb(95, 90, 83)", marginTop: "3vh" }}> luxury in our elegantly appointed rooms, where comfort meets sophistication.</p>
                </div>
                <div >
                  <img src='https://preview.colorlib.com/theme/unwind/images/f-services-2.jpg.webp' style={{ width: "40vh", height: "35vh", marginTop: "2vh" }} alt=''></img>
                </div>
              </Col>
              <Col lg={6}>
                <div >
                  <img src='https://preview.colorlib.com/theme/unwind/images/f-services-2.jpg.webp' style={{ width: "40vh", height: "35vh", marginTop: "2vh" }} alt=''></img>
                </div>
                <div className='ablut-cont'>
                  <p style={{ textAlign: "center", marginTop: "3vh" }}>
                    <BiSolidOffer style={{ color: "rgb(225, 189, 142)", fontSize: "12vh" }} />
                  </p>
                  <b style={{ fontFamily: "cursive", display: "flex", justifyContent: "center", alignItems: "center" }}>Special Offers</b>
                  <p style={{ fontFamily: "cursive", display: "flex", textAlign: "center", color: "rgb(95, 90, 83)", marginTop: "3vh" }}> Enjoy exclusive savings with our limited-time offers, including complimentary breakfast and late checkout.</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={5} style={{ marginTop: "15vh" }}>
            <b style={{ fontSize: "2vh", color: "rgb(231, 189, 136)" }}>ABOUT US</b>
            <h3 className='unwind-cont'>
              Unwind A Hotel Booking Agency
            </h3>
            <p className='unwind-cont-nxt'> Our hotel offers sophisticated accommodations, world-class dining, and personalized service that ensures an unforgettable stay. Indulge in our state-of-the-art amenities, including a lavish spa, rooftop pool, and exclusive lounge.
            </p>
            <Button variant="outline-light" onClick={handleBookNowClick} style={{ backgroundColor: "rgb(240, 203, 153)", padding: "8px 20px 8px 20px", fontSize: "18px" }}>BOOK YOUR ROOM NOW </Button>
          </Col>
          <Col lg={1}></Col>
        </Row>
        <Container >
          <h1 style={{ textAlign: "center", fontFamily: "cursive", marginTop: "10vh" }}>UNWIND FOR BOOKNOW</h1>
          <Row>
            <Col lg={4}>
              <div className="bgg1">
                <div className='contain-bg'></div>
              </div>
              <div className='containers'>
                <h3 className="gt0">UNWIND IN LONDON</h3>
                <a href="Rooms" className="gt10">BOOK NOW</a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="bgg2">
                <div className='contain-bg'></div>
              </div>
              <div className='containers' >
                <h3 className="gt0">UNWIND IN NEWYORK</h3>
                <a href="Rooms" className="gt10">BOOK NOW</a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="bgg3">
                <div className='contain-bg'></div>
              </div>
              <div className='containers'>
                <h3 className="gt0">UNWIND IN TOKYO</h3>
                <a href="Rooms" className="gt10">BOOK NOW</a>
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ marginTop: "20vh", marginBottom: "10vh" }}>
          <p style={{ fontFamily: "sans-serif", fontSize: "3vh", color: "rgb(173, 163, 88)", fontWeight: "600", textAlign: "center" }}> Unwind Services</p>
          <h1 style={{ textAlign: "center", paddingBottom: "1vh", paddingTop: "1vh", fontSize: "5vh", fontFamily: "cursive", fontWeight: "600", color: "gray" }}>
            Explore Our Hotel Services</h1>
          <Row data-aos="fade-up">
            <Col lg={2} className='services'>
              <CiWifiOn className='wifi' />
              <p className='wifi-alter'>WIFI</p>
            </Col>
            <Col lg={2} className='services'>
              <TbBrandBooking className='wifi' />
              <p className='wifi-alter'>BOOKING</p>
            </Col>
            <Col lg={2} className='services'>
              <IoRestaurant className='wifi' />
              <p className='wifi-alter'>RESTAURANT</p>
            </Col>
            <Col lg={2} className='services'>
              <BiSwim className='wifi' />
              <p className='wifi-alter'>SWIMMING</p>
            </Col>
            <Col lg={2} className='services'>
              <MdOutlineHealthAndSafety className='wifi' />
              <p className='wifi-alter'>HELATH </p>
            </Col>
            <Col lg={2} className='services'>
              <FaPersonShelter className='wifi' />
              <p className='wifi-alter'>SUPPORT</p>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Home