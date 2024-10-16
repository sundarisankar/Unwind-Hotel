import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import 'leaflet/dist/leaflet.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../CSS Pages/Contact.css'
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';




function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:4000/contact/contact', formData);
        console.log(response.data);
        alert('Contact form submitted successfully');
    } catch (error) {
        console.error('There was an error submitting the form', error);
    }
};


  useEffect(() => {
    AOS.init({
      duration: 800, // Set animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      delay:'300',
    });
  }, []);


  const locations = {
    london: [51.505, -0.09],
    newYork: [40.7128, -74.0060],
    tokyo: [35.6762, 139.6503],
  };

  const [currentLocation, setCurrentLocation] = useState(locations.london);


  return (
    <div>
    

    <div className='navBar_divClass-one-cont'>
        <Row className='image-home-one-cont'>

          <Col lg={12}>
            <Navbar data-bs-theme="dark">
              <Header/>
              {/* <Container>
                <Navbar.Brand href="/"><b style={{ fontSize: "30px", fontFamily: "sans-serif" }}>UNWIND </b><p style={{ fontSize: "15px", fontFamily: "sans-serif", fontWeight: "500" }}>HOTEL BOOKING</p></Navbar.Brand>
                <Nav className="navbar me-auto">


                  <a href="home" className='nav-head'>Home</a>
                  <a href="About" className='nav-head'>About </a>
                  <a href="Rooms" className='nav-head'>Rooms</a>
                  <a href="Blog" className='nav-head'>Blog </a>
                  <a href="Contact" className='nav-head'>Contact</a>

                </Nav>
              </Container> */}
            </Navbar>
            <p className='center-home-about-cont'  data-aos="fade-up">
              <div className="center-home-one-about-cont"> Home<MdKeyboardArrowRight />&nbsp;Contact us<MdKeyboardArrowRight /></div>
              <div className="center-home-two-about-cont">Contact Us</div>

            </p>


          </Col>


        </Row>
      </div>

    <Container >
      <h1 style={{display:"flex",justifyContent:"center",alignItems:"end",height:"13vh"}}>HOTEL BRANCHES IN WORLD</h1>
      <div className="d-flex justify-content-around mb-3 mt-5">
        <Button onClick={() => setCurrentLocation(locations.london)} className='button-cont'>London</Button>
        <Button onClick={() => setCurrentLocation(locations.newYork)} className='button-cont'>New York</Button>
        <Button onClick={() => setCurrentLocation(locations.tokyo)} className='button-cont'>Tokyo</Button>
      </div>
      <MapContainer center={currentLocation} zoom={2} style={{ height: "500px", width: "100%" }} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={currentLocation}> 
          <Popup>
          UNWIND 
               </Popup>
        </Marker>
      </MapContainer>
    </Container>


<Container style={{marginTop:"15vh"}}>
<Row>
 
  <Col lg={6} style={{border:"1px solid black"}}>

  <h2 style={{color:"orange"}}>Get in touch</h2>
 <Row>
    <Col lg={4}>
    
<h3>Address</h3>
<p style={{width:"20vh"}}>198 West 21th Street,Suite 721 New York NY 1006</p>
 
    
    </Col>
    <Col lg={4}>
    <h3>Email</h3>
    <p>unwind44@gmail.com</p>
    
    </Col>
    <Col lg={4}>
    
    <h3>PHONE:</h3>
    <p>+ 1235 4528 67</p>
  
    </Col>
    
    
  </Row>
  <form className="contact-left" onSubmit={handleSubmit}>
            <hr className="dark-hr" />
            <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="contact-inputs"
                onChange={handleChange}
            />
            <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="contact-inputs"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Enter your mobile no"
                name="mobile"
                className="contact-inputs"
                onChange={handleChange}
            />
            <textarea
                placeholder="Type a message"
                name="message"
                className="contact-inputs"
                onChange={handleChange}
            />
            <button className="button1 ms-5 p-2 mt-4 mb-5" type="submit">Submit</button>
        </form>


  
  </Col>
  <Col lg={6} className='image-cont'>
  
  {/* <Image src="https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=600" ></Image>
   */}
  
  </Col>
</Row>
</Container>
<div style={{marginTop:"20vh"}}>
<Footer />
</div>
    </div>
  )
}

export default Contact

