import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink, useNavigate} from "react-router-dom";
import "./Header.css"

const Header = () => {
return (
    <div className="MovieNavBar">
    <Navbar bg="dark" variant="dark" expand="lg" >
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'gold'}}>
                <FontAwesomeIcon icon ={faTicket}/>  RK
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="navHeadings"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Home</NavLink>
                    {/* <NavLink className ="nav-link" to="/watchList">Watch List</NavLink>       */}
                </Nav>
                {/* <Button variant="outline-info" className="me-2">Login</Button>
                <Button variant="outline-info">Register</Button> */}
                
                
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
}

export default Header
