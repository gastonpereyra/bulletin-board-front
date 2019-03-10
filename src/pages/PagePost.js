// Modulos
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
// Queries
import { POST_ID } from '../queries/posts';
// Componentes
import { Post } from './components/PostsComponents';
import { UserMedia } from './components/UsersComponents';
import { Comment } from './components/CommentsComponents';
import Pagination from './components/PaginationComponent';

export default ({match}) => {
    // Para que se cargue desde arriba
    window.scrollTo(0, 0);
    const [offset, setOffset] = useState(0);
    const postId= parseInt(match.params.id);
    
    return (
        <section className="hero is-fullheight-with-navbar is-black">
            <div className="video-overlay has-background-black">
            </div>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered ">
                <Mutation mutation={POST_ID} variables={{postId, offset}}>
                        { (a, {loading, error, data}) => {
                            if (!loading && !data)
                                a();
                            const comments= data && data.Post ? data.Post.comments : [];
                            const user= data && data.Post ? data.Post.author : null;
                            const post= data && data.Post ? data.Post : null;

                            return (
                                <>
                                    <div className="columns is-multiline is-centered">
                                        <div className="column is-two-thirds">
                                            <Post
                                                loading={loading}
                                                error={error}
                                                post={post}
                                                />
                                        </div>
                                        <div className="column is-one-third">
                                            <UserMedia 
                                                loading={loading}
                                                error={error}
                                                user={user}
                                                />
                                        </div>
                                        <div className="column is-one-third">
                                            <a href={`/new/comment/${postId}`} className="button is-link is-large">Comentar</a>
                                        </div>
                                    </div>
                                    <div className="columns is-centered">
                                        <div className="column auto">
                                            <Pagination 
                                                totalItems= {data && data.Post ? data.Post.commentsCount : 0}
                                                itemsByPage= {6}
                                                currentItem= {offset}
                                                changeItem= {setOffset}
                                            />
                                        </div>
                                    </div>
                                    <div className="columns is-multiline">
                                        {comments.map( (comment) => (
                                            <div key={comment.id || 0} className="column is-one-third">
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
                    </Mutation>
                </div>
            </div>
        </section>

    )
}