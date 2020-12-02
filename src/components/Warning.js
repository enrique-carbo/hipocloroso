import React, { Fragment } from 'react';
import {    Jumbotron,
            Container } from 'react-bootstrap';

// Import Icons
import { IconContext } from "react-icons";
import { FaNotesMedical } from "react-icons/fa"

const Warning = () => {
    return ( 
        <Fragment>
            <Jumbotron fluid className="mt-5">
            <Container>
                <h1 className="text-center text-danger">Advertencia!</h1>
                <p> El contenido del sitio web no es un sustituto a un cuidado profesional directo o sustituto, ni de un diagnóstico. La información
                    contenida aquí no busca brindar un consejo médico. Toda la información provista en este sitio web persigue sólo propósitos informativos.
                </p>

                <div className="text-center mb-3">
                <IconContext.Provider value={{ color: "red", size: "4em" }}>
                    <FaNotesMedical/> 
                </IconContext.Provider>
                </div>

                <p className="lead">Para síntomas, preguntas o asesoría médica visite a su doctor. Usted no debe tomar la información de esta página web como una alternativa
                   al consejo de su médico, veterinario u otro profesional sanitario.</p>
                
            </Container>
            </Jumbotron>
        </Fragment>
     );
}
 
export default Warning;