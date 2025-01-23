import React from 'react'
import { Navbar, Nav, Button, Collapse } from 'react-bootstrap'; // Optional: For using React-Bootstrap components


const Navigationbar = () => {
  return (
    <Navbar expand="lg">
    <Navbar.Brand href="index.html" className="font-weight-bold mx-auto py-0 pp">
      BrandName
    </Navbar.Brand>

    {/* Toggle button for mobile view */}
    <Navbar.Toggle aria-controls="navbarCollapse">
      <FaBars />
    </Navbar.Toggle>

    {/* Collapsible menu */}
    <Navbar.Collapse id="navbarCollapse" className="justify-content-between">
      <Nav className="mx-auto font-weight-bold">
        <Nav.Link href="index.html" className="nav-item nav-link times-roman-text p-3">
          Tutorial
        </Nav.Link>
        <Nav.Link href="about.html" className="nav-item nav-link times-roman-text">
          Exercises
        </Nav.Link>
        <Nav.Link href="class.html" className="nav-item nav-link times-roman-text">
          Certificate
        </Nav.Link>
      </Nav>

      {/* Search bar */}
      <Form inline className="p-3">
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          className="m-3 inputradius p-3"
          style={{
            paddingLeft: '30px', // Space for the icon
            backgroundColor: '#f8f9fa',
            border: '1px solid #ced4da',
          }}
        />
      </Form>

      {/* Dark Mode Toggle Button */}
      <div className="p-3">
        <Button
          onClick={toggleDarkMode}
          variant={isDarkMode ? 'light' : 'dark'}
          className="rounded-circle p-3 widtha"
        >
          {isDarkMode ? <FaSun className="d-flex justify-content-center" /> : <FaMoon className="d-flex justify-content-center moon" />}
        </Button>
      </div>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Navigationbar