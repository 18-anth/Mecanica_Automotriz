import React, { Component, useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <div className="nav-taller">
                
                <div>
                    <Link to="/Mecanica_Automotriz">
                        <h4>Taller Automotríz "El GRINGO"</h4>
                    </Link>
                    
                </div>
                <div className='LINKS-nav'>
                    <div className='LINKS'>
                    <Link to="/Gallery" onClick={closeMobileMenu}>Galeria</Link>
                    </div >
                    <div className='LINKS'>
                    <Link to="/SingUp" onClick={closeMobileMenu}> Singup</Link>
                    </div>
                    <div className='LINKS'> 
                    <Link to="/Login" onClick={closeMobileMenu}>Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;