// Modulos
import React from 'react';
import { Query } from 'react-apollo';
// Queries
import { USER_ID } from '../queries/users';
// Componentes
import { UserTiles } from './components/UsersComponents';

export default ({match}) => {
    // Para que se cargue desde arriba
    window.scrollTo(0, 0);
    
    const userId= parseInt(match.params.id);
    return (
        <section className="hero is-fullheight-with-navbar is-black">
            <div className="video-overlay has-background-black">
            </div>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered ">
                    <h1 className="title">Usuario</h1>
                    <Query query={USER_ID} variables={{userId}}>
                        { ({loading, error, data}) => {
                            return (
                                <UserTiles
                                    loading= {loading}
                                    error = {error}
                                    user = {data.User || null}
                                    />
                            )
                        }}
                    </Query>
                </div>
            </div>
        </section>

    )
}