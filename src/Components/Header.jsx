import React, { useContext } from 'react';
import { FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {

    const {dark, setDark} = useContext(ThemeContext);

    return (
        <>
            <header className='header py-3' style={{backgroundColor: dark? '#2B3743' : 'white', color: dark ? 'white' : ''}}>
                <div className='container d-flex align-items-center justify-content-between container overflow-hidden'>
                    <div className='text'>
                        <h3>Where in the world?</h3>
                    </div>
                    <div className="mode">
                        <div className='d-flex align-items-center justify-content-between' style={{cursor: 'pointer'}} onClick={() => setDark((prevState) => !prevState)}>
                            <FaMoon /> 
                            <span>
                                Dark Mode
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;