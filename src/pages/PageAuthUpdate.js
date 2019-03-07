// Modulos  
import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';

// Queries
 import { ME, UPDATE_ME } from '../queries/auth';
// Componentes
import { FieldHorizontal } from './components/FieldsComponents';
//
const imgDefault= 'https://icons-for-free.com/free-icons/png/512/318580.png';

export default ({history}) => {
    // Para que se cargue desde arriba
    window.scrollTo(0, 0);
    
    const [userName, setUserName] = useState('');
    const [newPassword, setNewPassword] = useState('');
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
                                        <img src={image} alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <h1 className="title has-text-dark">Registrarse</h1>
                                    <Query query={ME} >
                                        { ({loading, error, data}) => {
                                            
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
                                                    label="Nueva Password"
                                                    type="password"
                                                    placeholder="Su Nueva Password"
                                                    value={newPassword}
                                                    change={setNewPassword}
                                                    icon="lock"
                                                />
                                                
                                                <FieldHorizontal 
                                                    label="Contraseña"
                                                    type="password"
                                                    placeholder="Su Vieja Password"
                                                    value={password}
                                                    change={setPassword}
                                                    icon="lock"
                                                />

                                                <Mutation mutation={UPDATE_ME} variables={{userName, newPassword, email, image, password}}>
                                                    {(update, {loading, error, data} ) => {
                                                        // if (newPassword.length===0) setNewPassword(password);
                                                        if (data && data.updateUser) {
                                                            console.log(image);
                                                            sessionStorage.setItem('authToken',data.updateUser.token);
                                                            history.push('/');
                                                        }
                                                        if (error) {
                                                            alert('No se pudo actualizar: '+error.message);
                                                        }
                                                        return (
                                                            <div className="field is-horizontal">
                                                                <div className="field-label">
                                                                </div>
                                                                <div className="field-body">
                                                                    <div className="field">
                                                                        <p className="control">
                                                                            <button className="button is-success is-large" onClick={update}>
                                                                                Actualizar
                                                                            </button>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}}
                                                </Mutation>
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