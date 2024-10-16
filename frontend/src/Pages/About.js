import { useEffect, useState } from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import 'antd/dist/reset.css';

import { MdKeyboardArrowRight } from "react-icons/md";
import { GiPillow } from "react-icons/gi";
import '../CSS Pages/About.css'
import { VscTriangleRight } from "react-icons/vsc";
// import { Carousel } from 'antd';
import Footer from './Footer'
import 'aos/dist/aos.css';
import AOS from 'aos';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Header from './Header';


const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


function About() {


  useEffect(() => {
    AOS.init({
      duration: 800, // Set animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      delay: '300',
    });
  }, []);


  const items = [
    { id: 1, titleh: 'Roger Scott', subtitle: 'MARKETING MANAGER', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts..', image: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, titleh: 'John David', subtitle: 'MARKETING MANAGER', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts..', image: 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, titleh: 'Harry Potter', subtitle: 'MARKETING MANAGER', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts..', image: 'https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600' },

  ];




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };


  return (
    <div style={{ overflow: "hidden" }}>

      <div className='navBar_divClass-one'>
        <Row className='image-home-one'>

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
            <p className='center-home-about' data-aos="fade-up">
              <div className="center-home-one-about" > Home<MdKeyboardArrowRight />&nbsp;AboutUs<MdKeyboardArrowRight /></div>
              <div className="center-home-two-about"> About Us</div>

            </p>


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
                <p style={{ fontFamily: "cursive", display: "flex", textAlign: "center", color: "rgb(95, 90, 83)", marginTop: "3vh" }}> Far far away, behind the word mountains, far from the countries Vokalia.</p>
              </div>
              <div >
                <img src='https://preview.colorlib.com/theme/unwind/images/f-services-2.jpg.webp' style={{ width: "40vh", height: "35vh", marginTop: "2vh" }}></img>
              </div>

            </Col>
            <Col lg={6}>

              <div >
                <img src='https://preview.colorlib.com/theme/unwind/images/f-services-2.jpg.webp' style={{ width: "40vh", height: "35vh", marginTop: "2vh" }}></img>
              </div>
              <div className='ablut-cont'>
                <p style={{ textAlign: "center", marginTop: "3vh" }}>
                  <BiSolidOffer style={{ color: "rgb(225, 189, 142)", fontSize: "12vh" }} />
                </p>

                <b style={{ fontFamily: "cursive", display: "flex", justifyContent: "center", alignItems: "center" }}>Special Offers</b>
                <p style={{ fontFamily: "cursive", display: "flex", textAlign: "center", color: "rgb(95, 90, 83)", marginTop: "3vh" }}> Far far away, behind the word mountains, far from the countries Vokalia.</p>
              </div>

            </Col>
          </Row>


        </Col>
        <Col lg={5} style={{ marginTop: "15vh" }}>

          <b style={{ fontSize: "2vh", color: "rgb(231, 189, 136)" }}>ABOUT US</b>
          <h3 className='unwind-cont'>
            Unwind A Hotel Booking Agency
          </h3>
          <p className='unwind-cont-nxt'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.


          </p>
          <Button variant="outline-light" style={{ backgroundColor: "rgb(240, 203, 153)", padding: "8px 20px 8px 20px", fontSize: "18px" }}>BOOK YOUR ROOM NOW </Button>





        </Col>
        <Col lg={1}></Col>
      </Row>


      <div className='find-best' >
        <Row className='find-best-color' >
          <Col lg={3} ></Col>
          <Col lg={5} style={{ marginTop: "10vh" }} data-aos="fade-up">
            <em style={{ color: "rgb(229, 184, 125)", fontSize: "15px", fontFamily: "monospace", fontWeight: "700" }}>Find Best Hotel For Leaving</em>
            <p style={{ color: "white", fontSize: "6vh", fontFamily: "cursive", fontWeight: "700" }}>Find the Best Hotel in Your Next Vacation</p>

          </Col>

          <Col lg={1}></Col>
          <Col lg={3} style={{ marginTop: "17vh" }} data-aos="fade-up">

            <Button variant="outline-light" style={{ backgroundColor: "rgb(240, 203, 153)", padding: "20px 30px 20px 30px", fontSize: "18px" }}>BOOK  NOW </Button>


          </Col>
        </Row>

      </div>



      <div className='tour-bg'>


        <Row className='find-best-color-one'>

          <Col lg={12} style={{ textAlign: "center", marginTop: "20vh" }} data-aos="fade-up">

            <h3 style={{ color: "white", fontSize: "18px", fontWeight: "600", fontFamily: "sans-serif" }}>Watch our luxurious hotel</h3>
            <h2 style={{ color: "white", fontSize: "13vh", fontWeight: "700", fontFamily: "sans-serif" }}>Take A Tour</h2>




            <Button variant="primary" className='video-icon' onClick={handleShow}>

              <VscTriangleRight style={{ width: "15vh", height: "8vh", color: "white", marginLeft: "-3vh" }} />
            </Button>


            <Modal show={show} onHide={handleClose} style={{ marginTop: "15vh" }}>


              <iframe width="500vh" height="500vh" src="https://www.youtube.com/embed/nC0-dpj2P0A" title="Easy way to steamed tofu :: steamed tofu is better than fried" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


            </Modal>







          </Col>
        </Row>
      </div>


      {/* 
      <Carousel afterChange={onChange}  style={{ height: "90%", backgroundColor: "rgb(231 207 207)", paddingTop: "10vh", paddingBottom: "10vh" }}>


        <div >

          <em style={{ marginLeft: "97vh", fontFamily: "sans-serif", fontSize: "2vh", color: "rgb(173, 163, 88)", fontWeight: "600" }}> TESTIMONIAL</em>
          <h1 style={{ textAlign: "center", paddingBottom: "1vh", paddingTop: "1vh",fontSize:"5vh",fontFamily:"cursive",fontWeight:"600",color:"gray"}}>

          Happy Guests</h1>
          <Container>

            <Row style={{ marginTop: "10vh" }} >
              {items.map(item => (
                <Col key={item.id} md={6} lg={4} className="mb-4">
                  <Card>
                    <Card.Body>

                      <Row>
                        <Col lg={3}>
                          <img src={item.image} style={{ width: "12vh", height: "12vh", borderRadius: "10vh", border: "3px solid white" }}></img></Col>
                        <Col lg={9} style={{ marginTop: "1vh" }}>
                          <em style={{ fontFamily: "sans-serif", fontWeight: "600", fontSize: "4vh" }}>{item.titleh}</em>

                          <p style={{ color: "#c5a880" }}> {item.subtitle}</p>
                        </Col>

                      </Row>



                      <Card.Title></Card.Title>
                      <Card.Text className='unwind-cont-nxt-carrosal'>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>



        </div>

        <div >

          <em style={{ marginLeft: "97vh", fontFamily: "sans-serif", fontSize: "2vh", color: "rgb(173, 163, 88)", fontWeight: "600" }}> TESTIMONIAL</em>
          <h1 style={{ textAlign: "center", paddingBottom: "1vh", paddingTop: "1vh",fontSize:"5vh",fontFamily:"cursive",fontWeight:"600",color:"gray"}}>

          Happy Guests</h1>
          <Container>

            <Row style={{ marginTop: "10vh" }} >
              {items.map(item => (
                <Col key={item.id} md={6} lg={4} className="mb-4">
                  <Card>
                    <Card.Body>

                      <Row>
                        <Col lg={3}>
                          <img src={item.image} style={{ width: "12vh", height: "12vh", borderRadius: "10vh", border: "3px solid white" }}></img></Col>
                        <Col lg={9} style={{ marginTop: "1vh" }}>
                          <em style={{ fontFamily: "sans-serif", fontWeight: "600", fontSize: "4vh" }}>{item.titleh}</em>

                          <p style={{ color: "#c5a880" }}> {item.subtitle}</p>
                        </Col>

                      </Row>



                      <Card.Title></Card.Title>
                      <Card.Text className='unwind-cont-nxt-carrosal'>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>



        </div>

        <div >

          <em style={{ marginLeft: "97vh", fontFamily: "sans-serif", fontSize: "2vh", color: "rgb(173, 163, 88)", fontWeight: "600" }}> TESTIMONIAL</em>
          <h1 style={{ textAlign: "center", paddingBottom: "1vh", paddingTop: "1vh",fontSize:"5vh",fontFamily:"cursive",fontWeight:"600",color:"gray"}}>

Happy Guests</h1>
          <Container>

            <Row style={{ marginTop: "10vh" }}>
              {items.map(item => (
                <Col key={item.id} md={6} lg={4} className="mb-4">
                  <Card>
                    <Card.Body>

                      <Row>
                        <Col lg={3}>
                          <img src={item.image} style={{ width: "12vh", height: "12vh", borderRadius: "10vh", border: "3px solid white" }}></img></Col>
                        <Col lg={9} style={{ marginTop: "1vh" }}>
                          <em style={{ fontFamily: "sans-serif", fontWeight: "600", fontSize: "4vh" }}>{item.titleh}</em>

                          <p style={{ color: "#c5a880" }}> {item.subtitle}</p>
                        </Col>

                      </Row>



                      <Card.Title></Card.Title>
                      <Card.Text className='unwind-cont-nxt-carrosal'>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>



        </div>

      </Carousel> */}


      <Carousel controls={false} indicators={false} interval={2000} pause={false}>
        <Carousel.Item style={{ height: "70vh" }}>
          <img
            className="d-block w-100"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA6wMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAFhABAQEAAAAAAAAAAAAAAAAAABEB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOxmIoKIYDQlAUAFwQBRAFEAUAAEBRAFQAAAECgCaAaIAioAqsqCrWVBaIUGhmlBoQBRAFEAUQBRDQBKUFpUAKCAAgKlEAEUFVlQUQBQAUQBaVFApQApQApQAogCiAAAAIACAAgCoAoAKIoCoAoigAAAAAAAAAAAgAABogAACAAIoCouAAAoAAACoAogCiAKIAqAAAAACAAJqoAACAAq4gCgAKgCgAAAAAAAAAAAAAgqAAAai6gCKgAigoi4AqKAABioAoAAAAAAAAgCoAAAAIABoIACKigKgCiKCiAKAAAAAAAAAAAAAAgAAgKgAIqACKCiAKACiKAAAACiAKIAogCoAAAAIAAACAAAyoAuAAKAAAC4AAAAAAAAAAAGoAAACAAagAUAf//Z"
            alt=""
          />
          <Carousel.Caption>
            <div >

              <em style={{ marginLeft: "1vh", fontFamily: "sans-serif", fontSize: "2vh", color: "rgb(173, 163, 88)", fontWeight: "600" }}> TESTIMONIAL</em>
              <h1 style={{ textAlign: "center", paddingBottom: "1vh", paddingTop: "1vh", fontSize: "5vh", fontFamily: "cursive", fontWeight: "600", color: "gray" }}>

                Happy Guests</h1>
              <Container>

                <Row style={{ marginTop: "10vh" }} >
                  {items.map(item => (
                    <Col key={item.id} md={6} lg={4} className="mb-4">
                      <Card>
                        <Card.Body>

                          <Row>
                            <Col lg={3}>
                              <img src={item.image} style={{ width: "12vh", height: "12vh", borderRadius: "10vh", border: "3px solid white" }}></img></Col>
                            <Col lg={9} style={{ marginTop: "1vh" }}>
                              <em style={{ fontFamily: "sans-serif", fontWeight: "600", fontSize: "4vh" }}>{item.titleh}</em>

                              <p style={{ color: "#c5a880" }}> {item.subtitle}</p>
                            </Col>

                          </Row>



                          <Card.Title></Card.Title>
                          <Card.Text className='unwind-cont-nxt-carrosal'>{item.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>



            </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "70vh" }}>
          <img
            className="d-block w-100"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA6wMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAFhABAQEAAAAAAAAAAAAAAAAAABEB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOxmIoKIYDQlAUAFwQBRAFEAUAAEBRAFQAAAECgCaAaIAioAqsqCrWVBaIUGhmlBoQBRAFEAUQBRDQBKUFpUAKCAAgKlEAEUFVlQUQBQAUQBaVFApQApQApQAogCiAAAAIACAAgCoAoAKIoCoAoigAAAAAAAAAAAgAABogAACAAIoCouAAAoAAACoAogCiAKIAqAAAAACAAJqoAACAAq4gCgAKgCgAAAAAAAAAAAAAgqAAAai6gCKgAigoi4AqKAABioAoAAAAAAAAgCoAAAAIABoIACKigKgCiKCiAKAAAAAAAAAAAAAAgAAgKgAIqACKCiAKACiKAAAACiAKIAogCoAAAAIAAACAAAyoAuAAKAAAC4AAAAAAAAAAAGoAAACAAagAUAf//Z"
            alt=""
          />
          <Carousel.Caption>

            <div >

              <em style={{ marginLeft: "1vh", fontFamily: "sans-serif", fontSize: "2vh", color: "rgb(173, 163, 88)", fontWeight: "600" }}> TESTIMONIAL</em>
              <h1 style={{ textAlign: "center", paddingBottom: "1vh", paddingTop: "1vh", fontSize: "5vh", fontFamily: "cursive", fontWeight: "600", color: "gray" }}>

                Happy Guests</h1>
              <Container>

                <Row style={{ marginTop: "10vh" }} >
                  {items.map(item => (
                    <Col key={item.id} md={6} lg={4} className="mb-4">
                      <Card>
                        <Card.Body>

                          <Row>
                            <Col lg={3}>
                              <img src={item.image} style={{ width: "12vh", height: "12vh", borderRadius: "10vh", border: "3px solid white" }}></img></Col>
                            <Col lg={9} style={{ marginTop: "1vh" }}>
                              <em style={{ fontFamily: "sans-serif", fontWeight: "600", fontSize: "4vh" }}>{item.titleh}</em>

                              <p style={{ color: "#c5a880" }}> {item.subtitle}</p>
                            </Col>

                          </Row>



                          <Card.Title></Card.Title>
                          <Card.Text className='unwind-cont-nxt-carrosal'>{item.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>



            </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "70vh" }}>
          <img
            className="d-block w-100"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA6wMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAFhABAQEAAAAAAAAAAAAAAAAAABEB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOxmIoKIYDQlAUAFwQBRAFEAUAAEBRAFQAAAECgCaAaIAioAqsqCrWVBaIUGhmlBoQBRAFEAUQBRDQBKUFpUAKCAAgKlEAEUFVlQUQBQAUQBaVFApQApQApQAogCiAAAAIACAAgCoAoAKIoCoAoigAAAAAAAAAAAgAABogAACAAIoCouAAAoAAACoAogCiAKIAqAAAAACAAJqoAACAAq4gCgAKgCgAAAAAAAAAAAAAgqAAAai6gCKgAigoi4AqKAABioAoAAAAAAAAgCoAAAAIABoIACKigKgCiKCiAKAAAAAAAAAAAAAAgAAgKgAIqACKCiAKACiKAAAACiAKIAogCoAAAAIAAACAAAyoAuAAKAAAC4AAAAAAAAAAAGoAAACAAagAUAf//Z"
            alt=""
          />
          <Carousel.Caption>

            <div >

              <em style={{ marginLeft: "1vh", fontFamily: "sans-serif", fontSize: "2vh", color: "rgb(173, 163, 88)", fontWeight: "600" }}> TESTIMONIAL</em>
              <h1 style={{ textAlign: "center", paddingBottom: "1vh", paddingTop: "1vh", fontSize: "5vh", fontFamily: "cursive", fontWeight: "600", color: "gray" }}>

                Happy Guests</h1>
              <Container>

                <Row style={{ marginTop: "10vh" }} >
                  {items.map(item => (
                    <Col key={item.id} md={6} lg={4} className="mb-4">
                      <Card>
                        <Card.Body>

                          <Row>
                            <Col lg={3}>
                              <img src={item.image} style={{ width: "12vh", height: "12vh", borderRadius: "10vh", border: "3px solid white" }}></img></Col>
                            <Col lg={9} style={{ marginTop: "1vh" }}>
                              <em style={{ fontFamily: "sans-serif", fontWeight: "600", fontSize: "4vh" }}>{item.titleh}</em>

                              <p style={{ color: "#c5a880" }}> {item.subtitle}</p>
                            </Col>

                          </Row>



                          <Card.Title></Card.Title>
                          <Card.Text className='unwind-cont-nxt-carrosal'>{item.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>



            </div>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <Footer />

    </div>
  )
}

export default About
