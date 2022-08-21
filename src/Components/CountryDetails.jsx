import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';




const CountryDetails = () => {

    const country =  useParams();
    console.log(country, 'country');

    return (
        <div>
            <Container>
                <Col sm='12' md='6' lg='6'>
                    <img src="" alt="" />
                </Col>
                <Col sm='12' md='6' lg='6'>

                    <h2>Country</h2>
                </Col>
            </Container>
        </div>
    );
};

export default CountryDetails;