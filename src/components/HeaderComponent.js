// Modulos
import React, { useState, useEffect} from 'react';

// Convertir REM a Pixel
const convertRemToPixels = (rem) => {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const Header = (props) => {

    // Mostrar y Ocultar Barra Navegadora
    const [isFixed, setIsFixed] = useState('is-black is-transparent');
    
    useEffect( () => {
        window.onscroll = () => {
            if (document.body.scrollTop > (window.innerHeight-convertRemToPixels(3.5)) || 
                document.documentElement.scrollTop > (window.innerHeight-convertRemToPixels(3.5))) {
                    setIsFixed('is-fixed-top is-black')
            } else {
                    setIsFixed('is-black is-transparent');
            }
        };
    })

    // Menu desplegable en Mobile

    const [isActive, setIsActive] = useState(false);
    
    return (
        
        <nav className={"navbar "+isFixed} id="header">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src="/assets/images/icon.png" alt="Logo" title="Server Side" />
                        <strong>Tablon</strong>
                    </a>
                    <span className="navbar-burger burger" onClick={() => setIsActive(!isActive)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div className={'navbar-menu is-transparent'+ (isActive ? ' is-active' : '')}>
                    <div className="navbar-end">
                        <span className="navbar-item">
                            <a className="button is-link is-outlined is-inverted">
                                <span className="icon">
                                    <i className="fas fa-user"></i>
                                </span>
                                <span>LogIn</span>
                            </a>
                        </span>
                        <span className="navbar-item">
                            <a className="button is-success is-outlined is-inverted">
                                <span className="icon">
                                    <i className="fas fa-user-edit"></i>
                                </span>
                                <span>Registarse</span>
                            </a>
                            </span>
                        <span className="navbar-item">
                            <a className="button is-danger is-outlined is-inverted">
                                <span className="icon">
                                    <i className="fas fa-user-slash"></i>
                                </span>
                                <span>Salir</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </nav>

    )
};

export default Header;