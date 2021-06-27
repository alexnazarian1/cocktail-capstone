import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar(props) {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            
            <Navbar.Brand>Apperitivo</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/search">Find a Drink</Nav.Link>
                <Nav.Link href="/collections">Collections</Nav.Link>
            </Nav>
            
        </Navbar>
    )
}

export default NavBar;