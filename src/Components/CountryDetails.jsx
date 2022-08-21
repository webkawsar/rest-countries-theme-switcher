import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';




const CountryDetails = () => {

    const {name:countryName} =  useParams();
    const [country, setCountry] = useState({});
    const {dark} = useContext(ThemeContext);
    const navigate = useNavigate();

    const fetchData = async() => {
        
        const URL = `https://restcountries.com/v3.1/name/${countryName}`;
        const response = await fetch(URL);
        const data = await response.json();
        setCountry(data[0]);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleClick =() => {

        navigate('/countries');
    }

    console.log(country, 'country');

    const {name, flags, population, capital, region, subregion, borders, tld, currencies, languages} = country;

    return (
        <div style={{backgroundColor: dark? '#202D36' : '#FAFAFA', color: dark ? 'white' : '', height: '90vh'}}>
            <Container>           
                {
                    !Object.keys(country).length ? <div style={{color: 'red', textAlign: 'center', padding: '50px 0'}}>
                        <h2>Not to Show Country</h2>
                    </div> :
                    <div>
                        <div className="back_btn py-5">
                            <button className={dark ? 'custom_btn dark_btn' : 'custom_btn light_btn'} onClick={handleClick}>
                                <FaLongArrowAltLeft /> Back
                            </button>
                        </div>
                        
                        <div className='d-flex align-items-center justify-content-between'>
                            <div>
                                <img className='country_img' src={flags?.png} alt="" />
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='top_section'>
                                    <h3 className='mb-4'>{name?.official}</h3>
                                </div>
                                
                                <div className='middle_section d-flex justify-content-between'>
                                    <div>
                                        <h6>Native Name: {name?.common}</h6>
                                        <h6>Population: {population}</h6>
                                        <h6>Region: {region}</h6>
                                        <h6>Sub Region: {subregion}</h6>
                                        <h6>Capital: {capital}</h6>
                                        
                                    </div>
                                    <div>
                                        <h6>Top Level Domain: {tld}</h6>
                                        <h6>Currencies: {currencies ? Object.keys(currencies).map(cur => cur + ', ') : 'Not Found'}</h6>
                                        <h6>Languages: {languages ? Object.values(languages).map(lang => lang + ', ') : 'Not Found'}</h6>
                                    </div>
                                </div>

                                <div className='bottom_section'>
                                    <div className='d-flex align-items-center mt-4 flex-wrap'>
                                        <h6>Border Countries: {' '}</h6>
                                        <button className={dark ? 'border_btn dark_btn' : 'border_btn light_btn'}>
                                            French
                                        </button>

                                        <button className={dark ? 'border_btn dark_btn' : 'border_btn light_btn'}>
                                            Germany
                                        </button>
                                        
                                        <button className={dark ? 'border_btn dark_btn' : 'border_btn light_btn'}>
                                            Netherlands
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </Container>
        </div>
    );
};

export default CountryDetails;