// Modulos
import React from 'react';
import { Query } from 'react-apollo';
// Queries
import { USER_LAST, USER_TOP_POST, USER_TOP_COMMENT } from '../queries/users';
import { POST_LAST, POST_TOP_LIKES, POST_TOP_COMMENT } from '../queries/posts';
import { TAG_LAST, TAG_TOP_POST } from '../queries/tags';
// Componentes
import UserMedia from './UserMediaComponent';
import PinPost from './PostComponent';
import { TagsList } from './TagsComponent';

const HomePage = (props) => {
    return(
        <>
        <section className="hero is-fullheight-with-navbar is-black is-large">
            <div className="video-overlay"></div>
            <video autoPlay loop muted>
                <source src="assets/video/cover.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-body text-overlay">
                <div className="container has-text-centered">    
                    <h1 className="title is-1">
                        Bulletin Board
                    </h1>
                    <h2 className="subtitle is-3">
                        Ingresa -> Deja un Mensaje -> Comenta Otro
                    </h2>
                </div>
            </div>
        </section>
        <section className="section">
        </section>
        <section className="section">
        </section>
        <section className="section">
            <a className="title button is-info">
                <span className="icon is-small">
                    <i className="fas fa-user-circle" aria-hidden="true"></i>
                </span><span> Usuarios</span>
            </a>
            <div className="columns">
                    <div className="column is-one-third">
                        <h3 className="subtitle">Nuevo</h3>
                        <Query query={USER_LAST}>
                            { ({loading, error, data}) => {
                                const user = data.User? data.User[0] : null;
                                return (
                                    <UserMedia 
                                        loading={loading}
                                        error={error}
                                        user={user}
                                        />
                                )}
                            }
                        </Query>
                    </div>
                    <div className="column is-one-third">
                        <h3 className="subtitle">Con Más Mensajes</h3>
                        <Query query={USER_TOP_POST}>
                            { ({loading, error, data}) => {
                                const user = data.User? data.User[0] : null;
                                return (
                                    <UserMedia 
                                        loading={loading}
                                        error={error}
                                        user={user}
                                        />
                                )}
                            }
                        </Query>
                    </div>
                    <div className="column is-one-third">
                        <h3 className="subtitle">Con Más Comentarios</h3>
                        <Query query={USER_TOP_COMMENT}>
                            { ({loading, error, data}) => {
                                const user = data.User? data.User[0] : null;
                                return (
                                    <UserMedia 
                                        loading={loading}
                                        error={error}
                                        user={user}
                                        />
                                )}
                            }
                        </Query>
                    </div>
                </div>
            </section>
        <section className="section">
            <a className="title button is-info">
                <span className="icon is-small">
                    <i className="fas fa-sticky-note" aria-hidden="true"></i>
                </span><span> Mensajes</span>
            </a>
            <div className="columns">
                <div className="column is-one-third">
                    <h3 className="subtitle">Nuevos</h3>
                    <Query query={POST_LAST}>
                        { ({loading, error, data}) => {
                            const post = data.Post? data.Post[0] : null;
                            return (
                                <PinPost 
                                    loading={loading}
                                    error={error}
                                    post={post}
                                    />
                            )}
                        }
                    </Query>
                </div>
                <div className="column is-one-third">
                    <h3 className="subtitle">Mas comentados</h3>
                    <Query query={POST_TOP_COMMENT}>
                        { ({loading, error, data}) => {
                            const post = data.Post? data.Post[0] : null;
                            return (
                                <PinPost 
                                    loading={loading}
                                    error={error}
                                    post={post}
                                    />
                            )}
                        }
                    </Query>
                </div>
                <div className="column is-one-third">
                    <h3 className="subtitle">Que mas Gusta</h3>
                    <Query query={POST_TOP_LIKES}>
                        { ({loading, error, data}) => {
                            const post = data.Post? data.Post[0] : null;
                            return (
                                <PinPost 
                                    loading={loading}
                                    error={error}
                                    post={post}
                                    />
                            )}
                        }
                    </Query>
                </div>
            </div>
        </section>
        <section className="section">
            
            <a className="title button is-info">
                <span className="icon is-small">
                    <i className="fas fa-hashtag" aria-hidden="true"></i>
                </span><span> Etiquetas</span>
            </a>
            <div className="columns is-centered">
                <div className="column is-one-third">
                    <h3 className="subtitle">Nuevas</h3>
                    <Query query={TAG_LAST}>
                            { ({loading, error, data}) => {
                                const tags = data.Tag? data.Tag : null;
                                return (
                                    <TagsList
                                        loading= {loading}
                                        error= {error}
                                        tags={tags} />
                                )}
                            }
                    </Query>
                </div>
                <div className="column is-one-third">
                    <h3 className="subtitle">Mas Usadas</h3>
                    <Query query={TAG_TOP_POST}>
                            { ({loading, error, data}) => {
                                const tags = data.Tag? data.Tag : null;
                                return (
                                    <TagsList 
                                        loading= {loading}
                                        error= {error}
                                        tags={tags} />
                                )}
                            }
                    </Query>
                </div>
            </div>
        </section>
        </>
    )
};

export default HomePage;