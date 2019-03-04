// Modulos
import React, { useState } from 'react';
import { Query } from 'react-apollo';
// Queries
import { COMMENT_ID } from '../queries/comments';
// Componentes
import { PinPost } from './components/PostsComponents';
import { Comment } from './components/CommentsComponents';

export default ({match}) => {
    // Para que se cargue desde arriba
    window.scrollTo(0, 0);
    const commentId= parseInt(match.params.id);
    
    return (
        <section className="hero is-fullheight-with-navbar is-black">
            <div className="video-overlay has-background-black">
            </div>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered ">
                    <Query query={COMMENT_ID} variables={{commentId}}>
                        { ({loading, error, data}) => {

                            const post = data && data.Comment ? data.Comment.post : null;
                            const comment = data && data.Comment ? data.Comment : null;

                            return (
                                <div className="columns is-centered is-vcentered">
                                    <div className="column is-half">
                                        <PinPost 
                                            loading={loading}
                                            error={error}
                                            post={post}
                                            />
                                    </div>
                                    <div className="column is-half">
                                        <Comment 
                                            loading={loading}
                                            error={error}
                                            comment={comment}
                                            />
                                    </div>
                                </div>
                            )
                        }}
                    </Query>
                </div>
            </div>
        </section>

    )
}