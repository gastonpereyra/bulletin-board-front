// Modulos
import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
// Queries
import { COMMENT_NEW } from '../queries/comments';
import { POST } from '../queries/posts';
// Componentes
import { PinPost } from './components/PostsComponents';
import { CommentNew } from './components/CommentsComponents';

export default ({match, history}) => {
    // Para que se cargue desde arriba
    window.scrollTo(0, 0);
    const postId= parseInt(match.params.id);
    const [message, setMessage] = useState("");
    
    return (
        <section className="hero is-fullheight-with-navbar is-black">
            <div className="video-overlay has-background-black">
            </div>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered ">
                    <div className="columns is-centered is-vcentered is-multiline">
                        <div className="column is-three-quarters">
                            <Query query={POST} variables={{postId}}>
                                { ({loading, error, data}) => {

                                    const post = data && data.Post ? data.Post : null;

                                    return (
                                        <PinPost 
                                            loading={loading}
                                            error={error}
                                            post={post}
                                            />     
                                    )}}
                            </Query>
                        </div>
                        <div className="column is-three-quarters">
                            <Mutation mutation={COMMENT_NEW} variables={{postId, message}}>
                                { (newComment,{loading, error, data}) => {
                                    if (error) console.error(error.message);
                                    if (data && data.createComment) history.push('/comment/'+data.createComment.id);
                                    return (<>
                                        <CommentNew
                                            message= {message}
                                            setMessage= {setMessage}
                                            />
                                        <button className="button is-success is-large" onClick={newComment}>Aceptar</button>
                                    </>
                                )}}
                            </Mutation>
                        </div>
                    </div>
                           
                        
                </div>
            </div>
        </section>

    )
}