import React, { Fragment } from 'react';
import NavigationBar from '../components/NavigationBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {    Col, 
            Container,
            Row,
            Card,
            Image } from 'react-bootstrap';

const Medicine = () => {
    return ( 
        <Fragment>
            <NavigationBar />
            <header>
                <img
                    className="img-fluid w-100 fullHeight"
                    src="img/medical_green.jpg"
                    alt="header_img"
                    fluid
                />
            </header>

            <section>
                <Jumbotron>
                    <h3 className="text-center text-success">
                    Coadyuvante para la limpieza y curación de todo tipo de heridas.
                    </h3>
                    <h3 className="text-center text-primary mt-3">Poderosa acción antiséptica actúa rápida y eficazmente en la superficie cutánea.</h3>
                </Jumbotron>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col md={6}>
                        <Card border="success">
                            <Card.Header as="h3" className="text-center bg-success">Cicatrización de heridas.</Card.Header>
                            <Card.Body>
                            <Card.Title className="text-center text-primary"><h3>Efectos</h3></Card.Title>
                            <Card.Text>
                              <p>La infección o la colonización de las heridas retrasa importantemente el proceso de cicatrización.</p>
                              <p>El HClO es un agente antimicrobiano de amplio espectro y pH Neutro, reduce significativamente la carga bacteriana de las heridas,
                                creado así el ambiente ideal para promover la curación.</p>
                              <p>Hay evidencia de que las soluciones de superoxidación aceleran por sí mismas el proceso de cicatrización, al estimular la proliferación
                                y migración de fibroblastos.</p>  
                              <p>Adyuvante en el tratamiento integral y multidisciplinario de lesiones agudas y crónicas. Por ende, no debe usarse como única estrataegia
                                para el óptimo tratamiento de heridas simples o complejas.</p>  
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                        </Col>
                        <Col md={6}>
                            <Image src="img/injury.jpg" fluid/>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Jumbotron className="mt-3">
                <h3 className="text-center text-primary">Reduce el biofilm o biopelícula.</h3>
                <h5 className="text-center">La biopelícula consiste en comunidades de bacterias de superficie altamente organizadas que utilizan una matriz y propiedades celulares para mantener
                    la cohesión.</h5>
            </Jumbotron>

            <section className="mx-3">
                <Container>
                    <Row>
                    <Card>
                    <Card.Img variant="top" src="img/Tissue_Repair.jpg" />
                    <Card.Body>
                        <Card.Title as="h3" className="text-center">Reparación de Heridas.</Card.Title>
                        <Card.Text as="h5">1- Se produce un coágulo en el área de la lesión.</Card.Text>
                        <Card.Text as="h5">2- Se liberan mediadores químicos inflamatorios. Llegan glóbulos blancos.</Card.Text>
                        <Card.Text as="h5">3. Se produce tejido vascular de granulación. Llegan fibroblastos. Se múltiplican células epiteliales.</Card.Text>
                        <Card.Text as="h5">4- El epitelio retoma su espesor, madura y se contrae.</Card.Text>
                        
                    </Card.Body>
                    </Card>
                    </Row>
                </Container>
            </section>

        </Fragment>
     );
}
 
export default Medicine;