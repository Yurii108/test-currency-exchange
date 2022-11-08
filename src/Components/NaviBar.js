import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NaviBar = () => {
    return (
        <Navbar collapseOnSelect expand='lg' bg='info' variant='light' 
        style={{ 'background-color' : '#e3f2fd' }}>
            <Navbar.Brand style={{ 'margin-left' : '16px' }}>Test CE</Navbar.Brand>
            <Nav className='mr-auto'>
                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            </Nav>
        </Navbar >
    )
}

export default NaviBar;