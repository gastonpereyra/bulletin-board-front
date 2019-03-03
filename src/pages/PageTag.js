// Modulos
import React, { useState } from 'react';
import { Query } from 'react-apollo';
// Queries
import { TAG_ID } from '../queries/tags';
// Componentes
import { Tag } from './components/TagsComponents';
import { PinPost } from './components/PostsComponents';
import Pagination from './components/PaginationComponent';

export default ({match}) => {
    // Para que se cargue desde arriba
    window.scrollTo(0, 0);
    const [offset, setOffset] = useState(0);
    const tagId= parseInt(match.params.id);
    
    return (
        <section className="hero is-fullheight-with-navbar is-black">
            <div className="video-overlay has-background-black">
            </div>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered ">
                    <Query query={TAG_ID} variables={{tagId, offset}}>
                            { ({loading, error, data}) => {

                                const posts= data && data.Tag ? data.Tag.posts : [];
                                const tag= data ? data.Tag : null;

                                return (
                                    <>
                                        <div className="columns is-multiline is-vcentered">
                                            <div className="column is-half">
                                                <Tag 
                                                    loading={loading}
                                                    error={error}
                                                    tag={tag}
                                                    isLarge={true}
                                                    />
                                            </div>
                                            <div className="column auto">
                                                <Pagination 
                                                    totalItems= {data && data.Tag ? data.Tag.postsCount : 0}
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