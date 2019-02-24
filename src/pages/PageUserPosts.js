// Modulos
import React, { useState } from 'react';
import { Query } from 'react-apollo';
// Queries
import { USER_POSTS } from '../queries/users';
// Componentes
import { UserMedia } from './components/UsersComponents';
import { PinPost } from './components/PostsComponents';
import Pagination from './components/PaginationComponent';

export default ({match}) => {
    // Para que se cargue desde arriba
    window.scrollTo(0, 0);
    const [offset, setOffset] = useState(0);
    const userId= parseInt(match.params.id);

    return (
        <section className="hero is-fullheight-with-navbar is-black">
            <div className="video-overlay has-background-black">
            </div>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered ">
                    <Query query={USER_POSTS} variables={{userId, offset}}>
                        { ({loading, error, data}) => {

                            const posts= data && data.User ? data.User.posts : [];

                            return (
                                <>
                                    <div className="columns is-multiline is-vcentered">
                                        <div className="column is-half">
                                            <UserMedia 
                                                loading={loading}
                                                error={error}
                                                user={data.User || null}
                                                />
                                        </div>
                                        <div className="column auto">
                                            <Pagination 
                                                totalItems= {data && data.User ? data.User.postsCount : 0}
                                                itemsByPage= {6}
                                                currentItem= {offset}
                                                changeItem= {setOffset}
                                            />
                                        </div>
                                    </div>
                                    <div className="columns is-multiline">
                                        {posts.map( (post) => (
                                            <div className="column is-one-third">
                                                <PinPost 
                                                    loading={loading}
                                                    error={error}
                                                    post={post}
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