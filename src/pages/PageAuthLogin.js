// Modulos  
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';

// Queries
 import { LOGIN } from '../queries/auth';
// Componentes
import { FieldHorizontal } from './components/FieldsComponents';


export default ({history}) => {
    // Para que se cargue desde arriba
    window.scrollTo(0, 0);
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <section className="hero is-fullheight-with-navbar is-black">
            <div className="video-overlay has-background-black">
            </div>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered ">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <div className="card box">
                                <div className="card-image">
                                    <figure className="image is-360x360">
                                        <img src="https://icons-for-free.com/free-icons/png/512/318580.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <h1 className="title has-text-dark">Ingresar</h1>
                                    <Mutation mutation={LOGIN} variables={{userName, password}}>
                                        { (login, {loading, error, data}) => {

                                            if (data && data.logIn) { 
                                                sessionStorage.setItem('authToken',data.logIn.token);
                                                history.push('/');
                                            };

                                            return (
                                            <div className="content">
                                                <FieldHorizontal 
                                                    label="Usuario"
                                                    type="text"
                                                    placeholder="Su usuario"
                                                    value={userName}
                                                    change={setUserName}
                                                    icon="user"
                                                />
                                                <FieldHorizontal 
                                                    label="Contraseña"
                                                    type="password"
                                                    placeholder="Su Password"
                                                    value={password}
                                                    change={setPassword}
                                                    icon="lock"
                                                />
                                                <div className="field is-horizontal">
                                                    <div className="field-label">
                                                    </div>
                                                    <div className="field-body">
                                                        <div className="field">
                                                            <p className="control">
                                                                <button className="button is-success is-large" onClick={login}>
                                                                    Entrar
                                                                </button>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            )}}
                                    </Mutation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}