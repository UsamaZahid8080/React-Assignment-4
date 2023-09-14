import React from 'react'
import "./Header.css"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button1 from './Button1';
import images1 from "./images/logo.png"

function Header() {
  return (
    <>
    <div>
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#"><img src={images1} alt=''className='logo1' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='navs'>Books</Nav.Link>
            <Nav.Link href="#action2" className='navs'>Courses</Nav.Link>
            <Nav.Link href="#action1" className='navs'>Others</Nav.Link>
            <Nav.Link href="#action2" className='navs'>Blogs</Nav.Link>
          </Nav>
          <Form className="d-flex navs1">
           
            <Button1 style={{backgroundColor:"green",border:"none",padding:"5px 30px",borderRadius:"30px",fontSize:"17px",fontWeight:"bold"}}>SIGN UP</Button1>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default Header