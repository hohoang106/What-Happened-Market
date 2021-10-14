import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
// function Navbar() {

//   return (
//     <div className="container-fluid header-top d-flex align-item-center">
//       <nav className="navbar navbar-expand-lg container  ">
//         <img src='/images/logo.png' alt="logo" />
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-respon" aria-controls="navbar-respon" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbar-respon">
//         <ul className="navbar-nav nav-header">
//           <li className="nav-item">
//             <a className="nav-link" href="trangchu.html">Introduction</a>
//           </li>
//           <li className="nav-item ">
//             <a className="nav-link " href="trangchu.html">Solution</a>
//           </li>
//           <li className="nav-item ">
//             <a className="nav-link" href="trangchu.html">Rate Plan</a>
//           </li>
//           <div className="vertical-line">

//           </div>
//           <li className="nav-item ">
//             <a className="nav-link" href="trangchu.html">Login</a>
//           </li>
//           <li className="nav-item ">
//             <a className="nav-link" href="trangchu.html">Apply for free use</a>
//           </li>
//         </ul>
//         </div>

//       </nav>
//     </div>

//   )
// }
function NavHeader() {

    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src='/images/logo.png' alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" bg="light"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-header">
              <Nav.Link className="nav-link text-white">Introduction</Nav.Link>
              <Nav.Link className="nav-link text-white">Solution</Nav.Link>
              <Nav.Link className="nav-link text-white">Rate Plan</Nav.Link>
              <div className="vertical-line"></div>
              <Nav.Link className="nav-link text-white">Login</Nav.Link>
              <Nav.Link className="nav-link text-white">Apply for free use</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
export default NavHeader;