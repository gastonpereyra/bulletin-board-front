// Modulos  
import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';

// Queries
 import { ME } from '../queries/auth';
// Componentes
import { FieldHorizontal } from './components/FieldsComponents';
//
const imgDefault= 'https://icons-for-free.com/free-icons/png/512/318580.png';

export default ({history}) => {
    // Para que se cargue desde arriba
    window.scrollTo(0, 0);
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    
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
                                        <img src={image ? image : imgDefault} alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <h1 className="title has-text-dark">Registrarse</h1>
                                    <Query query={ME} >
                                        { ({loading, error, data}) => {
                                            console.log(sessionStorage.getItem('authToken'));
                                            if (data && data.me) { 
                                                setUserName(data.me.userName);
                                                setEmail(data.me.email);
                                                setImage(data.me.image);
                                            };

                                            if (error) {
                                                setUserName('ERROR')
                                                console.error(error);
                                            }

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
                                                    label="Email"
                                                    type="email"
                                                    placeholder="Su Email"
                                                    value={email}
                                                    change={setEmail}
                                                    icon="at"
                                                />
                                                <FieldHorizontal 
                                                    label="Imagen"
                                                    type="url"
                                                    placeholder="URL de la Imagen"
                                                    value={image}
                                                    change={setImage}
                                                    icon="address-book"
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
                                                                <button className="button is-success is-large">
                                                                    Actualizar
                                                                </button>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            )}}
                                    </Query>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}