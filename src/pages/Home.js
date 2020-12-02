import React, {Fragment} from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Warning from '../components/Warning';

// Import Bootstrap components
import {  Carousel,
          Container,
          Row,
          Col,
          Image,
          Card,
          Jumbotron } from 'react-bootstrap';

// Import CSS
import './Home.css';

// Import Icons
import { IconContext } from "react-icons";
import { RiWaterFlashLine } from "react-icons/ri"
import { ImLab } from "react-icons/im"




const HomePage = () => {
    return ( 
        <Fragment>
          <NavigationBar />

          <header className="bg-success">  
            
            <Carousel fade={true}>
              <Carousel.Item>
              <img
              className="img-fluid w-100 fullHeight"
              src="img/virus.jpg"
              alt="First slide"
              />
              <Carousel.Caption>
               <div>
                  <h1 id="carousel-text">Desinfección</h1>
                  <h4>Elimina bacterias, virus y hongos.</h4>
               </div> 
              </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img
              className="img-fluid w-100 fullHeight"
              src="img/light.jpg"
              alt="Second slide"
              
              />  
              <Carousel.Caption>
              <h1 id="carousel-text">Electrólisis.</h1>
              <h4>Proceso que separa los elementos de un compuesto por medio de la electricidad.</h4>
              </Carousel.Caption>
              </Carousel.Item>

            <Carousel.Item>
            <img
              className="img-fluid w-100 fullHeight"
              src="img/splash.jpg"
              alt="Third slide"
              />  
             <Carousel.Caption>
                <div className="text-success">
                <h1 id="carousel-text">Ecológico</h1>
                <h4>Producto biodegradable.</h4>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            
            </header>
            
            

            <section>
                <Container>
                    <Row className="mt-5 mb-5">
                      <Col md={6}>
                        <Card className="border-success">
                            <Image src="img/hclo_lg.png" fluid/>
                        </Card>
                      </Col>
                      <Col md={6}>
                        <Card className="border-success">
                          <Card.Header className="h1 text-center bg-success">HClO</Card.Header>
                            <Card.Body>
                              <Card.Title className="text-center">Aplicaciones.</Card.Title>
                                <ul>
                                    <li>Industria Alimenticia.</li>
                                    <li>Hoteles. Restorantes.</li>
                                    <li>Aplicaciones Industriales.</li>
                                    <li>Salud. Medicina.</li>
                                    <li>Odontología.</li>
                                    <li>Sector agropecuario.</li>
                                    <li>Horticultura.</li>
                                    <li>Potabilización del Agua.</li>
                                    <li>Medicina Veterinaria.</li>
                                    <li>Control de Biopelículas.</li>
                                </ul>
                            </Card.Body>
                            <Card.Footer className="lead text-center">Es fácil de usar, económico y con un buen perfil de seguridad.</Card.Footer>
                        </Card>
                      </Col>
                    </Row>
                </Container>
            </section>

            <section>
              <Jumbotron>
                <div className="text-center mb-2">
                  <IconContext.Provider value={{ color: "green", size: "5em" }}>
                    <RiWaterFlashLine/>
                  </IconContext.Provider>
                </div>
                <h4>
                El ácido hipocloroso también conocido como HClO, es una sustancia que se produce de forma natural en el organismo por los glóbulos blancos para combatir
                las infecciones y eliminar los patógenos mediante la oxidación y la cloración.
                </h4>
              </Jumbotron>
            </section>

            <section>
              <Container>
                <Row>
                <Col md={6}>
                        <Card className="border-success">
                          <Card.Header className="h1 text-center bg-success">Caracteristicas<ImLab/></Card.Header>
                            <Card.Body>
                                <ul>
                                    <li>Biocida de amplio espectro: elimina bacterias, virus, hongos y algas.</li>
                                    <li>Estable en disolución madre.</li>
                                    <li>Rápida acción biocida.</li>
                                    <li>Soluciones claras, no deja películas.</li>
                                    <li>Disipa los malos olores.</li>
                                    <li>Al diluirse no pierde sus propiedades desinfectantes.</li>
                                    <li>No daña las manos. Ph similar a la piel humana.</li>
                                    <li>Alto poder residual.</li>
                                    <li>No afecta los tratamientos de efluentes.</li>
                                    <li>Biodegradable: se desintegra en sal y agua.</li>
                                    <li>No es inflamable.</li>
                                    <li>No corrosivo.</li>
                                </ul>
                            </Card.Body>
                            <Card.Footer className="lead text-center">El ácido hipocloroso es reconocido como el desinfectante más eficaz, seguro y 
                            biológico de la familia del cloro.</Card.Footer>
                        </Card>
                </Col>  
                  <Col md={6}>
                  <Card>
                    <Image src="img/undraw_science.svg" height="500"/>
                  </Card>
                  </Col>
                </Row>
                
              </Container>
              
            </section>


        <Warning />

        <Footer />
            
        </Fragment>
     );
}
 
export default HomePage;