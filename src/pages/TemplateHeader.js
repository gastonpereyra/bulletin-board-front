// Modulos
import React, { useState, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';

// Convertir REM a Pixel
const convertRemToPixels = (rem) => {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default ({match, token=null, getToken}) => {

    // Menu desplegable en Touch - oculta los items de la navbar
    const [isActive, setIsActive] = useState(false);

    // Mostrar y Ocultar Barra Navegadora hero principal
    const [isFixed, setIsFixed] = useState('is-black is-transparent');
    
    useEffect( () => {
        // Si entre en el rango donde se oculta los items de la navbar 
        if (window.innerWidth < 1086) {
            setIsFixed('is-fixed-top is-black')
        } else {
            // Si no para mostrar la barra al scrollear
            window.onscroll = () => {
                if (document.body.scrollTop > (window.innerHeight-convertRemToPixels(3.5)) || 
                    document.documentElement.scrollTop > (window.innerHeight-convertRemToPixels(3.5))) {
                        setIsFixed('is-fixed-top is-black')
                } else {
                        setIsFixed('is-black is-transparent');
                }
            };
        }
        
    });

    return (
        
        <nav className={"navbar "+isFixed} id="header">
            <div className="container">
                <div className="navbar-brand">
                    <Link to='/' className="navbar-item">
                        <img src="/assets/images/icon.png" alt="Logo" title="Server Side" />
                        <strong>Tablon</strong>
                    </Link>
                    <span className="navbar-burger burger" onClick={() => setIsActive(!isActive)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div className={'navbar-menu is-transparent'+ (isActive ? ' is-active' : '')}>
                    <div className="navbar-start">
                        <span className="navbar-item">
                            <Link to='/post' activeClassName="is-inverted is-focused" className="button is-light is-outlined">
                                <span className="icon">
                                    <i className="fas fa-sticky-note"></i>
                                </span>
                                <span>Mensajes</span>
                            </Link>
                        </span>
                        <span className="navbar-item">
                            <Link to='/user' activeClassName="is-inverted is-focused" className="button is-light is-outlined">
                                <span className="icon">
                                    <i className="fas fa-user-circle"></i>
                                </span>
                                <span>Autores</span>
                            </Link>
                        </span>
                        <span className="navbar-item">
                            <Link to='/tag' activeClassName="is-inverted is-focused" className="button is-light is-outlined">
                                <span className="icon">
                                    <i className="fas fa-hashtag"></i>
                                </span>
                                <span>Etiquetas</span>
                            </Link>
                        </span>
                    </div>
                    <div className="navbar-end">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <span class="navbar-link">
                                <span className="icon">
                                    <i className="fas fa-user"></i>
                                </span>
                                <span>Usuarios</span>
                            </span>
                            <div class="navbar-dropdown is-transparent">
                                {!token && <>
                                    <span className="navbar-item">
                                        <Link  to='/auth/signin' activeClassName="is-inverted is-focused" className="button is-light is-outlined">
                                            <span className="icon">
                                                <i className="fas fa-user-edit"></i>
                                            </span>
                                            <span>Registarse</span>
                                        </Link>
                                    </span>
                                    <span className="navbar-item">
                                        <Link to='/auth/login' activeClassName="is-inverted is-focused" className="button is-light is-outlined">
                                            <span className="icon">
                                                <i className="fas fa-user-check"></i>
                                            </span>
                                            <span>Ingresar</span>
                                        </Link>
                                    </span>
                                    <span className="navbar-item">
                                        <span className="button is-danger is-outlined is-inverted" onClick={ () => getToken("aaaaa") }>
                                            <span className="icon">
                                                <i className="fas fa-users"></i>
                                            </span>
                                            <span>Entrar Trucho</span>
                                        </span>
                                    </span>
                                </> }
                                {token && <>
                                    <span className="navbar-item">
                                        <Link  to='/auth/0' activeClassName="is-inverted is-focused" className="button is-light is-outlined">
                                            <span className="icon">
                                                <i className="fas fa-user-cog"></i>
                                            </span>
                                            <span>Perfil</span>
                                        </Link>
                                    </span>
                                    <span className="navbar-item">
                                        <span className="button is-danger is-outlined is-inverted" onClick={ () => getToken(null) }>
                                            <span className="icon">
                                                <i className="fas fa-user-slash"></i>
                                            </span>
                                            <span>Salir</span>
                                        </span>
                                    </span>
                                </> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
};