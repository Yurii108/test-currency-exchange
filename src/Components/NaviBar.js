import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NaviBar = () => {
    return (
        <Navbar collapseOnSelect expand='lg' bg='info' variant='light' 
        style={{ backgroundColor : '#e3f2fd' }}>
            <Navbar.Brand style={{ marginLeft : '16px' }}>Test</Navbar.Brand>
            <Nav className='mr-auto'>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/about'>About</Nav.Link>
            </Nav>
        </Navbar >
    )   
}

export default NaviBar;