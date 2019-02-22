// Modulos
import React from 'react';
import { Query } from 'react-apollo';
// Queries
import { USER_ID } from '../queries/users';
// Componentes
import UserTiles from './Users/UserTilesComponent';

const UserPage = ({match}) => {
    const userId= parseInt(match.params.id);
    return (
        <section className="hero is-fullheight-with-navbar is-black">
            <div className="video-overlay has-background-black">
            </div>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered ">
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

export default UserPage;