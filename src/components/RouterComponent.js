// Modulos
import React from 'react';

// Router
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const Router = (props) => {

    const HeaderTemplate = () => {
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

    const HomePage = () => {
        return(
            <div class="hero-body">
                <div class="container has-text-centered">
                    <p class="title">
                        Title
                    </p>
                    <p class="subtitle">
                        Subtitle
                    </p>
                </div>
            </div>
        )
    };

    const FooterTemplate = () => {
        return (
            <div class="hero-foot">
                <div class="content">
                    <div class="buttons is-centered">
                        <a class="button is-dark is-outlined" href="https://github.com/gastonpereyra" title="Autor">
                            <span class="icon">
                                <i class="fab fa-github"></i>
                            </span>
                            <span>Gaston Pereyra</span>
                        </a>

                        <a class="button is-warning is-outlined" href="https://glitch.com" title="Hecho con">
                            <span class="icon">
                                <i class="fas fa-fish"></i>
                            </span>
                            <span>Glitch</span>
                        </a>

                        <a class="button is-primary is-outlined" href="https://bulma.io/" title="Hecho con">
                            <span class="icon">
                                <i class="fab fa-blogger-b"></i>
                            </span>
                            <span>Bulma</span>
                        </a>

                        <a class="button is-danger is-outlined" href="https://graphql.org/" title="Hecho con">
                            <span class="icon">
                                <i class="fab fa-connectdevelop"></i>
                            </span>
                            <span>GrahpQL</span>
                        </a> 
                        
                        <a class="button is-link is-outlined" href="http://docs.sequelizejs.com/" title="Hecho con">
                            <span class="icon">
                                <i class="fas fa-cube"></i>
                            </span>
                            <span>Sequelize</span>
                        </a>

                        <a class="button is-success is-outlined" href="https://nodejs.org/" title="Hecho con">
                            <span class="icon">
                                <i class="fab fa-node-js"></i>
                            </span>
                            <span>Node</span>
                        </a> 

                        <a class="button is-success is-outlined" href="https://vuejs.org/" title="Hecho con">
                            <span class="icon">
                                <i class="fab fa-reactjs"></i>
                            </span>
                            <span>React</span>
                        </a>
                        
                        <a class="button is-info is-outlined" href="https://www.facebook.com/groups/571508276552938/" title="Para">
                            <span class="icon">
                                <i class="fab fa-facebook"></i>
                            </span>
                            <span>Podemos Aprender</span>
                        </a> 
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section class="hero is-fullheight is-dark is-large">
            <HeaderTemplate />
            <Switch>
                <Route path="/" component={HomePage} />
                <Redirect to="/" />
            </Switch>
            <FooterTemplate />
        </section>
    );
};

export default withRouter(Router);