// Modulos
import React, { useState } from 'react';
import { Query } from 'react-apollo';
// Queries
import { USERS } from '../queries/users';
// Componentes
import { UserMedia } from './components/UsersComponents';
import Pagination from './components/PaginationComponent';

export default ({match}) => {
    // Para que se cargue desde arriba
    window.scrollTo(0, 0);
    const [offset, setOffset] = useState(0);
    
    return (
        <section className="hero is-fullheight-with-navbar is-black">
            <div className="video-overlay has-background-black">
            </div>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered ">
                <Query query={USERS} variables={{offset}}>
                        { ({loading, error, data}) => {

                            const users= data && data.Users ? data.Users.users : [];

                            return (
                                <>
                                    <div className="columns is-multiline is-vcentered">
                                        <div className="column is-half">
                                            
                                        </div>
                                        <div className="column auto">
                                            <Pagination 
                                                totalItems= {data && data.Users ? data.Users.count : 0}
                                                itemsByPage= {6}
                                                currentItem= {offset}
                                                changeItem= {setOffset}
                                            />
                                        </div>
                                    </div>
                                    <div className="columns is-multiline">
                                        {users.map( (user) => (
                                            <div className="column is-one-third">
                                                <UserMedia 
                                                    loading={loading}
                                                    error={error}
                                                    user={user}
                                                    />
                                          </div>
                                        ))}
                                    </div>    
                                </>
                            )}
                        }
                    </Query>
                </div>
            </div>
        </section>

    )
}