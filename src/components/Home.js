// src/components/Home.js
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './Home.css'; // Importa el archivo CSS
import cs1 from '../imagenes/cs1.png';
import c2 from '../imagenes/c2.png';
import c3 from '../imagenes/c3.png';
import foth from '../imagenes/fotoh.png';
import mpd from '../imagenes/mpd.png';

const Home = () => {
    return (
        <div>


            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={cs1} alt="Primera imagen" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={c2} alt="Segunda imagen" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={c3} alt="Tercera imagen" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container className="image-container">
                <Row>
                    <Col md={6}>
                        <img src={foth} alt="Imagen FOTH" className="image-left" />
                    </Col>
                    <Col md={6}>
                        <img src={mpd} alt="Imagen MPD" className="image-right" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
