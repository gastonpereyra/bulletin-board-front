// Modulos
import React, { useState } from 'react';
import { Query } from 'react-apollo';
// Queries
import { USER_COMMENTS } from '../queries/users';
// Componentes
import { UserMedia } from './components/UsersComponents';
import { Comment } from './components/CommentsComponents';
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
                <Query query={USER_COMMENTS} variables={{userId, offset}}>
                        { ({loading, error, data}) => {

                            const comments= data && data.User ? data.User.comments : [];

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
                                                totalItems= {data && data.User ? data.User.commentsCount : 0}
                                                itemsByPage= {6}
                                                currentItem= {offset}
                                                changeItem= {setOffset}
                                            />
                                        </div>
                                    </div>
                                    <div className="columns is-multiline">
                                        {comments.map( (comment) => (
                                            <div className="column is-one-third">
                                                <Comment 
                                                    loading={loading}
                                                    error={error}
                                                    comment={comment}
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