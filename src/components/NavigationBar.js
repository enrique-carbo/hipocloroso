import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {    
    Navbar, 
    Nav, 
    Form, 
    Button
     } from 'react-bootstrap';

// Import Icons
import { IconContext } from "react-icons";
import { GiClick } from "react-icons/gi"

const NavigationBar = () => {
    return ( 
        <div>
        <Navbar bg="success" expand="lg"  variant="dark">
          <Navbar.Brand>Ácido Hipocloroso  
              <img
                alt=""
                src="/img/hclo_sm.png"
                width="30"
                height="30"
                className="d-inline-block align-top ml-4" />
           </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/vet">Veterinaria</Nav.Link>
                    <Nav.Link href="/medicine">Medicina</Nav.Link>
                    
                </Nav>
            
                <Form inline>
                    <Button variant="primary">
                    <IconContext.Provider value={{ color: "white", size: "2em" }}>
                        <GiClick/>
                    </IconContext.Provider>
                      Contacto
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </div>
     );
}
 
export default NavigationBar;