// Modulos
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
// Queries
import { POST_NEW } from '../queries/posts';
// Componentes
import { PostNew } from './components/PostsComponents';

export default ({match, history}) => {
    // Para que se cargue desde arriba
    window.scrollTo(0, 0);
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [tagsList, setTagList] = useState("");

    const tagList = (tags) => {
        return tags.split(',');
    }
    
    return (
        <section className="hero is-fullheight-with-navbar is-black">
            <div className="video-overlay has-background-black">
            </div>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered ">
                <Mutation mutation={POST_NEW} variables={{title, message, tagList: tagList(tagsList)}}>
                        { (newPost, {loading, error, data}) => {

                            if (error) console.error(error.message);
                            if (data && data.createPost) history.push('/post/'+data.createPost.id);

                            return (
                                <>
                                    <div className="columns is-multiline is-centered">
                                        <div className="column is-two-thirds">
                                            <PostNew
                                                title={title}
                                                setTitle={setTitle}
                                                message={message}
                                                setMessage={setMessage}
                                                tagList={tagsList}
                                                setTagList={setTagList}
                                                />
                                        </div>
                                    </div>  
                                    <div className="columns is-multiline is-centered">
                                        <div className="column auto">
                                            <div className="field">
                                                <p className="control">
                                                    <button className="button is-success is-large" onClick={newPost}>
                                                        Crear
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
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