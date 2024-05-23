import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Form, FormControl } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect  className='bg-cream ' expand="lg" style={{ width: '100%',boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)'}}>
        <Container>
          <Navbar.Brand href="/" className="text-black">ARTZY4U</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown
      title={<span style={{ color: 'black' }}>Customize</span>}
      id="customize-nav-dropdown"
    >
                <NavDropdown.Item href="#apparel" >
                  Apparel
                  <NavDropdown.Divider />
                <Nav.Link href="#tshirts" >T-Shirts</Nav.Link>
                <Nav.Link href="#shirts">Shirts</Nav.Link>
                <Nav.Link href="#pants">Pants</Nav.Link>
                <Nav.Link href="#jackets">Jackets</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#accessories">
                  Accessories
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#hats-caps">Hats/Caps</NavDropdown.Item>
                  <NavDropdown.Item href="#bags-totes">Bags/Totes</NavDropdown.Item>
                  <NavDropdown.Item href="#phone-cases">Phone Cases</NavDropdown.Item>
                  <NavDropdown.Item href="#socks">Socks</NavDropdown.Item>
                </NavDropdown.Item>
                <NavDropdown.Item href="#home-living">
                  Home & Living
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#mugs">Mugs</NavDropdown.Item>
                  <NavDropdown.Item href="#pillows-cushions">Pillows/Cushions</NavDropdown.Item>
                  <NavDropdown.Item href="#blankets-throws">Blankets/Throws</NavDropdown.Item>
                  <NavDropdown.Item href="#towels">Towels</NavDropdown.Item>
                </NavDropdown.Item>
                <NavDropdown.Item href="#stationery">
                  Stationery
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#notebooks-journals">Notebooks/Journals</NavDropdown.Item>
                  <NavDropdown.Item href="#pens-pencils">Pens/Pencils</NavDropdown.Item>
                  <NavDropdown.Item href="#desk-organizers">Desk Organizers</NavDropdown.Item>
                </NavDropdown.Item>
                <NavDropdown.Item href="#tech-gadgets">
                  Tech Gadgets
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#laptop-sleeves">Laptop Sleeves</NavDropdown.Item>
                  <NavDropdown.Item href="#tablet-cases">Tablet Cases</NavDropdown.Item>
                  <NavDropdown.Item href="#keyboards">Keyboards</NavDropdown.Item>
                  <NavDropdown.Item href="#wireless-chargers">Wireless Chargers</NavDropdown.Item>
                  <NavDropdown.Item href="#mouse-pads">Mouse Pads</NavDropdown.Item>
                </NavDropdown.Item>
                <NavDropdown.Item href="#gifts-keepsakes">
                  Gifts & Keepsakes
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#photo-frames">Photo Frames</NavDropdown.Item>
                  <NavDropdown.Item href="#personalized-gifts">Personalized Gifts</NavDropdown.Item>
                  <NavDropdown.Item href="#customized-ornaments">Customized Ornaments</NavDropdown.Item>
                  <NavDropdown.Item href="#engraved-jewelry">Engraved Jewelry</NavDropdown.Item>
                </NavDropdown.Item>
                <NavDropdown.Item href="#art-decor">
                  Art & Decor
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#wall-art">Wall Art</NavDropdown.Item>
                  <NavDropdown.Item href="#posters">Posters</NavDropdown.Item>
                  <NavDropdown.Item href="#decals-stickers">Decals/Stickers</NavDropdown.Item>
                  <NavDropdown.Item href="#diy-kits">DIY Kits</NavDropdown.Item>
                </NavDropdown.Item>
                <NavDropdown.Item href="#sports-outdoors">
                  Sports & Outdoors
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#water-bottles">Water Bottles</NavDropdown.Item>
                  <NavDropdown.Item href="#yoga-mats">Yoga Mats</NavDropdown.Item>
                  <NavDropdown.Item href="#backpacks">Backpacks</NavDropdown.Item>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing"  className='text-black'>Shop</Nav.Link>
              <Nav.Link href="#pricing "  className='text-black'>Inspiration</Nav.Link>
              <Nav.Link href="/contact" className='text-black '>Reach out</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
            <Nav>
            
              <hr />
              <Button className='btn btn-primary ms-2'>Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
