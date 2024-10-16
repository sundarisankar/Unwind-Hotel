  import React from 'react'
  import { Col, Row } from 'react-bootstrap'
  import '../CSS Pages/Footer.css'
  import { FaTwitter } from "react-icons/fa";
  import { FaFacebookF } from "react-icons/fa";
  import { FaInstagramSquare } from "react-icons/fa";
  import { MdKeyboardArrowRight } from "react-icons/md";
  import { FaAddressBook } from "react-icons/fa6";
  import { FaPhone } from "react-icons/fa6";
  import { FaTelegramPlane } from "react-icons/fa";
  import { FaHeart } from "react-icons/fa";



  function Footer() {
    return (
      <div style={{overflow:"hidden"}}>
    

    <Row className='back-bg'>
      <Col lg={3}>
      <Row>
          <Col lg={3}></Col>
          <Col lg={9}>
          <b>UnWind</b>
          <p>HOTEL BOOKING

          </p>
          <p style={{color:"#ffffffb3"}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <FaTwitter className='icon-box'/>
          <FaFacebookF  className='icon-box1'/> <FaInstagramSquare  className='icon-box1'/>
          </Col>
          
      </Row>
      
      </Col>


      <Col lg={2}>
      <Row>
          <Col lg={3}></Col>
          <Col lg={9}>
          <b>services</b>
        
          <h6 className='service-cont'> <MdKeyboardArrowRight />Free Wifi</h6>
          <h6 className='service-cont-serve'> <MdKeyboardArrowRight />Easy Booking</h6>
          <h6 className='service-cont-serve'> <MdKeyboardArrowRight />Restaurant</h6>
          <h6 className='service-cont-serve'> <MdKeyboardArrowRight />Swimming Poot</h6>
          
              </Col>
          
      </Row>
      
      </Col>
      <Col lg={2}>
      

      <Row>
          <Col lg={3}></Col>
          <Col lg={9}>
          
        
          <h6 className='service-cont-one'> <MdKeyboardArrowRight />Free Wifi</h6>
          <h6 className='service-cont-serve'> <MdKeyboardArrowRight />Easy Booking</h6>
          <h6 className='service-cont-serve'> <MdKeyboardArrowRight />Restaurant</h6>
          <h6 className='service-cont-serve'> <MdKeyboardArrowRight />Swimming Poot</h6>
          
              </Col>
          
      </Row>
      
      </Col>
      <Col lg={2}>
      
      <Row>
          <Col lg={3}></Col>
          <Col lg={9}>
          <b>services</b>
        
          <h6 className='service-cont'> <MdKeyboardArrowRight />Free Wifi</h6>
          <h6 className='service-cont-serve'> <MdKeyboardArrowRight />Easy Booking</h6>
          <h6 className='service-cont-serve'> <MdKeyboardArrowRight />Restaurant</h6>
          <h6 className='service-cont-serve'> <MdKeyboardArrowRight />Swimming Poot</h6>
          
              </Col>
          
      </Row>
      
      
      </Col>
      <Col lg={3}>
      

      <Row>
          <Col lg={1}></Col>
          <Col lg={11}>
          <b>Have a Question?</b>
        
          <p style={{marginTop:"5vh"}} className='service-cont-serve'> <FaAddressBook style={{color:"#c5a880 "}}/> 	203 Fake St. Mountain View, San Francisco,<p style={{marginLeft:"3vh"}}>California, USA</p></p>
          <p className='service-cont-serve'> <FaPhone style={{color:"#c5a880 "}}/>		+2 392 3929 210</p>
          <p className='service-cont-serve'> <FaTelegramPlane style={{color:"#c5a880 "}}/>		info@yourdomain.com</p>
          </Col>
          
      </Row>
      </Col>
    </Row>
    
  <Row style={{backgroundColor:"black"}}>
  <Col lg={12} className='final-foot'>
  Copyright ©2024 All rights reserved | This template is made with &nbsp; <FaHeart style={{color:"gray",fontSize:"14px",display:"flex"}}/>&nbsp;  by &nbsp;<b style={{color:"rgb(201, 203, 169)"}}>Colorlib</b>
  </Col>

  </Row>

      </div>
    )
  }

  export default Footer
