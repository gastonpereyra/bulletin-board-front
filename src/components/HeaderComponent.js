// Modulos
import React from 'react';

const Header = (props) => {
    return (
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item">
                            <img src="https://cdn.glitch.com/project-avatar/beff46ab-c8a9-4e97-8811-1fe113d14bbc.png?1550257024589" alt="Logo" title="Server Side" />
                            <strong>Tablon</strong>
                        </a>
                        <span className="navbar-burger burger" data-target="navbarUser">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarUser" className="navbar-menu">
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
        </div>
    )
};

export default Header;