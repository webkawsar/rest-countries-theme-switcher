import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import Country from './Country';




const Countries = () => {
    const [countries, setCountries] = useState([]);
    const {dark} = useContext(ThemeContext);

    const fetchData = async() => {
        const URL = 'https://restcountries.com/v3.1/all';
        const response = await fetch(URL);
        const data = await response.json();

        setCountries(data.slice(0, 10));
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div style={{backgroundColor: dark? '#202D36' : '#FAFAFA', color: dark ? 'white' : ''}}>
            <Container>
                <Row className='gy-4'>
                    {
                        countries.map(country => <Country key={country.population} country={country} />)
                    }
                </Row>
            </Container>
        </div>
        
    );
};

export default Countries;