import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

// Import Icons
import { IconContext } from "react-icons";
import { FaCreativeCommons } from "react-icons/fa"


const Footer = () => {
    return ( 
        <footer>
            <Container className="mt-5 bg-success" fluid>
                <Row>
                    <Col className="text-center">
                        <h3>Creative Commons --
                        <span>
                          <IconContext.Provider value={{ size: "2em" }}>
                            <FaCreativeCommons/>
                          </IconContext.Provider>
                        </span>
                        -- 2020
                        </h3>
                        
                    </Col>
                    
                </Row>
            </Container>
            
        </footer>
     );
}
 
export default Footer;