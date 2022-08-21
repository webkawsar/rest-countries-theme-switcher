import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';


const Country = ({country}) => {

    const {dark} = useContext(ThemeContext);

    // const {name, flags, population, capital, region} = country;
    // console.log(country, 'country');
    // console.log(name, 'name');
    const {name, flags, population, capital, region, subregion, borders, tld, currencies, languages} = country;
    
    // console.log(borders, 'borders');
    // console.log(tld, 'tld');
    // console.log(languages, 'languages');
    // console.log(currencies, 'currencies');


    return (
        <>
            <Col sm={6} md='6' lg='4' xl='3'>
                <Card style={{backgroundColor: dark? '#2B3743' : 'white', color: dark ? 'white' : ''}}>
                    
                    <Card.Link as={Link} to={`/countries/${name?.common?.toLowerCase()}`}>
                        <Card.Img style={{height: '150px'}} src={flags?.png} />
                    </Card.Link>

                    <Card.Body>
                        <Card.Title className='mb-3'>{name?.common}</Card.Title>
                        <h6><span style={{color: dark ? '#CDD5DB' : ''}}>Population</span>: <span style={{color: dark ? '#B1BBC4' : '', fontWeight: 'normal'}}>{population}</span></h6>

                        <h6><span style={{color: dark ? '#CDD5DB' : ''}}>Region</span>: <span style={{color: dark ? '#B1BBC4' : '', fontWeight: 'normal'}}>{region}</span></h6>
                        
                        <h6><span style={{color: dark ? '#CDD5DB' : ''}}>Capital</span>: <span style={{color: dark ? '#B1BBC4' : '', fontWeight: 'normal'}}>{capital ? capital[0] : 'Not Found'}</span></h6>

                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Country;