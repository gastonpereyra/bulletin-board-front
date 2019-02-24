// Modulos
import React, { useState } from 'react';
import { Query } from 'react-apollo';
// Queries
import { TAGS } from '../queries/tags';
// Componentes
import { TagsList } from './components/TagsComponents';
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
                    <Query query={TAGS} variables={{  }}>
                        { ({loading, error, data}) => {
                            const tags = data.Tags? data.Tags : null;
                            return (
                                <>
                                    <div className="columns is-multiline is-vcentered">
                                        <div className="column is-half">
                                            
                                        </div>
                                        <div className="column auto">
                                            <Pagination 
                                                totalItems= {data && data.Tag ? data.Tag : 0}
                                                itemsByPage= {32}
                                                currentItem= {offset}
                                                changeItem= {setOffset}
                                            />
                                        </div>
                                    </div>
                                    <TagsList 
                                        loading= {loading}
                                        error= {error}
                                        tags={tags} />
                                </>
                            )}
                        }
                    </Query>
                </div>
            </div>
        </section>

    )
}