// Modulos
import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer has-background-black">
            <div className="content">
                <div className="buttons is-centered">
                    <a className="button is-light is-outlined" href="https://github.com/gastonpereyra" title="Autor">
                        <span className="icon">
                            <i className="fab fa-github"></i>
                        </span>
                        <span>Gaston Pereyra</span>
                    </a>

                    <a className="button is-warning is-outlined" href="https://glitch.com" title="Hecho con">
                        <span className="icon">
                            <i className="fas fa-fish"></i>
                        </span>
                        <span>Glitch</span>
                    </a>

                    <a className="button is-primary is-outlined" href="https://bulma.io/" title="Hecho con">
                        <span className="icon">
                            <i className="fab fa-blogger-b"></i>
                        </span>
                        <span>Bulma</span>
                    </a>

                    <a className="button is-danger is-outlined" href="https://graphql.org/" title="Hecho con">
                        <span className="icon">
                            <i className="fab fa-connectdevelop"></i>
                        </span>
                        <span>GrahpQL</span>
                    </a> 
                    
                    <a className="button is-link is-outlined" href="http://docs.sequelizejs.com/" title="Hecho con">
                        <span className="icon">
                            <i className="fas fa-cube"></i>
                        </span>
                        <span>Sequelize</span>
                    </a>

                    <a className="button is-success is-outlined" href="https://nodejs.org/" title="Hecho con">
                        <span className="icon">
                            <i className="fab fa-node-js"></i>
                        </span>
                        <span>Node</span>
                    </a> 

                    <a className="button is-link is-outlined" href="https://reactjs.org/" title="Hecho con">
                        <span className="icon">
                            <i className="fab fa-react"></i>
                        </span>
                        <span>React</span>
                    </a>
                    
                    <a className="button is-info is-outlined" href="https://www.facebook.com/groups/571508276552938/" title="Para">
                        <span className="icon">
                            <i className="fab fa-facebook"></i>
                        </span>
                        <span>Podemos Aprender</span>
                    </a> 
                </div>
            </div>
        </div>
    )
}

export default Footer;