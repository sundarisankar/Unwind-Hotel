import { useState,useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import '../CSS Pages/Blog.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Pagination } from 'antd';
import Footer from './Footer';
import 'antd/dist/reset.css';
import Header from './Header';



function Blog() {



  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      
    });
  }, []);

  const items = [
    [
      {
        id: 1, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 2, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 3, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 4, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/635126/pexels-photo-635126.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 5, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/732199/pexels-photo-732199.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 6, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/1450348/pexels-photo-1450348.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
    ],
    [
      {
        id: 7, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'
      },
      {
        id: 8, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 9, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxhttps://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3Din | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/17109108/pexels-photo-17109108/free-photo-of-poufs-set-around-tables-in-hotel-lobby.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      },
      {
        id: 10, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.unsplash.com/photo-1582044294565-081ea7d0437c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D'
      },
      {
        id: 11, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 12, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
    ],
    [
      {
        id: 13, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      },
      {
        id: 14, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/10072847/pexels-photo-10072847.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      },
      {
        id: 15, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      },
      {
        id: 16, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 17, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 18, titleh: 'Best Hotel near Beach in Hawaii', last: '8 Comments',
        content: 'by Admin | 28 December, 2018 ', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', image: 'https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      },
    ],
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div className='navBar_divClass-one-blog'>
        <Row className='image-home-one-blog'>
          <Col lg={12}>
            <Navbar data-bs-theme="dark">
              <Header/>
              {/* <Container>
                <Navbar.Brand href="/">
                  <b style={{ fontSize: "30px", fontFamily: "sans-serif" }}>UNWIND</b>
                  <p style={{ fontSize: "15px", fontFamily: "sans-serif", fontWeight: "500" }}>HOTEL BOOKING</p>
                </Navbar.Brand>
                <Nav className="navbar me-auto">
                  <a href="home" className='nav-head'>Home</a>
                  <a href="About" className='nav-head'>About</a>
                  <a href="Rooms" className='nav-head'>Rooms</a>
                  <a href="Blog" className='nav-head'>Blog</a>
                  <a href="Contact" className='nav-head'>Contact</a>
                </Nav>
              </Container> */}
            </Navbar>
            <p className='center-home-about-blog' data-aos="fade-up">
              <div className="center-home-one-about-blog"> Home<MdKeyboardArrowRight />&nbsp;Blog<MdKeyboardArrowRight /></div>
              <div className="center-home-two-about-blog">Blogs</div>
            </p>
          </Col>
        </Row>
      </div>

      <Container>

<h1 style={{margin:"5vh",textAlign:"center",fontSize:"8vh",fontFamily:"sanserif"}}>UNWIND HOTEL BLOG</h1>

        <Row style={{ marginTop: "10vh" }}>
          {items[currentPage - 1].map(item => (
            <Col key={item.id} lg={4}>
              <Card className='card-blog-box' data-aos="fade-up">
                <Card.Body>
                  <img src={item.image} style={{ width: "100%", height: "37vh" }} alt={item.titleh}></img>
                  <p className='content-blog'>{item.content}</p>
                  <Card.Title className='title-blog'>{item.titleh}</Card.Title>
                  <Card.Text className='des-blog'>{item.description}</Card.Text>
                  <p className='last-blog'>{item.last}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Pagination
          current={currentPage}
          pageSize={1}
          total={items.length}
          onChange={handlePageChange}
          showSizeChanger={false} // Hide the page size changer
          style={{ marginTop: "10vh", marginBottom: "10vh", textAlign: 'center' }}
        />
      </Container>

      <Footer />
    </div>
  )
}

export default Blog;
