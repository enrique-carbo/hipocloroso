import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Fragment } from 'react';

import {    Container, 
            Jumbotron, 
            Row,
            Card,
            Image,
            Alert } from 'react-bootstrap';

// Import CSS
import './Vet.css';

// Import Icons
import { IconContext } from "react-icons";
import { FaDog, FaCat, FaHorse } from "react-icons/fa"

const Vet = () => {
    return ( 
        <Fragment>
            <NavigationBar />

            <header>
                <img
                    className="img-fluid w-100 fullHeight"
                    src="img/vet1.jpg"
                    alt="header_img"
                    fluid
                />
            </header>

            <section>
                <Jumbotron>
                    <div className="text-center mb-3">
                        <IconContext.Provider value={{ color: "green", size: "4em" }}>
                        <FaDog/> <FaCat/> <FaHorse/>
                        </IconContext.Provider>
                    </div>
                    <h3 className="text-center text-success">En veterinaria y zootecnia, en equinos, caninos, felinos, efectivo en la desinfección del material quirúrgico, 
                    comederos, perreras, pisos y paredes.</h3>
                </Jumbotron>
            </section>

            <section>
                <Container>
                    <Row className="mt-5 mb-5">
                      
                        <Card className="border-success">
                          <Card.Header>
                            <Image src="img/veterinarians.jpg" fluid rounded/>
                          </Card.Header>
                            <Card.Body>
                              <Card.Title as="h2" className="text-center">Caracteristicas beneficiosas</Card.Title>
                                <Alert variant="primary" className="text-center" ><h5>No citotóxico</h5></Alert>
                                <Alert variant="success" className="text-center" ><h5>Sin ardor</h5></Alert>
                                <Alert variant="primary" className="text-center" ><h5>Sin sensibilización</h5></Alert>
                                <Alert variant="success" className="text-center" ><h5>No irrita los ojos</h5></Alert>
                                <Alert variant="primary" className="text-center" ><h5>Sin toxicidad oral: seguro si se lame o ingiere</h5></Alert>
                                <Alert variant="success" className="text-center" ><h5>No caustico</h5></Alert>
                                <Alert variant="primary" className="text-center" ><h5>No inflamable</h5></Alert>

                            </Card.Body>
                            <Card.Footer>
                            <Alert variant="danger" className="text-center" ><h4>Seguridad y eficacia.</h4></Alert>
                            </Card.Footer>
                        </Card>
                    </Row>
                </Container>
            </section>

            <section>
                <Jumbotron>
                    <h3 className="text-center text-primary">
                    Solución para el cuidado de la piel y heridas. Producto de vanguardia, diseñado para mejorar todas las fases de la cicatrización de lesiones cutáneas.
                    </h3>
                </Jumbotron>
            </section>
        </Fragment>
     );
}
 
export default Vet;