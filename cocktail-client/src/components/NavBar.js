import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar(props) {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>Apperitivo</Navbar.Brand>
            <Nav className="me-auto right">
                <Nav.Link href="/search">Find a Drink</Nav.Link>
                <Nav.Link href="/collections">Collections</Nav.Link>
            </Nav>
            </Container>
            
        </Navbar>
    )
}

export default NavBar;