// Modulos
import React from 'react';
import {Link} from 'react-router-dom';
import { TagsBar } from './TagsComponents';

// TimeZone
import { getLocalTime } from '../../shared/localTime';

export const PinPost = ({loading, error, post}) => {

    let title='', 
        message='...', 
        comments=0, 
        likes=0, 
        dislikes=0, 
        createdAt="...",
        id=0;

    if (loading) {
        title= "Cargando";
    }

    if (error) {
        title= "Error";
        message= error.message;
        createdAt= getLocalTime(Date.now());
    }

    if (post) {
        title= post.title;
        message= post.message;
        comments= post.commentsCount;
        likes= post.likesCount;
        dislikes= post.dislikesCount;
        createdAt= getLocalTime(post.createdAt);
        id= post.id;
    }

    return (
        <article className="message">
            <div className="message-header">
                <span className="icon">
                    <i className="fas fa-thumbtack" aria-hidden="true"></i>
                </span>
                <p>{title}</p>
                <Link to={`post/${id}`} className="button">Abrir</Link>
            </div>
            <div className="message-body">
                <p>
                    {message.length >500 ? message.slice(0,500)+" (...)" : message}
                </p>
                <br/>
                <nav className="level is-mobile">
                    <div className="level-left">
                    <button className="level-item button" aria-label="comments">
                        <span className="icon is-small">
                            <i className="fas fa-comments" aria-hidden="true"></i>
                        </span>
                        <span>
                            ({comments})
                        </span>
                    </button>
                    <span className="level-item has-text-danger can-be-selected" aria-label="likes">
                        <span className="icon is-small">
                            <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                        <span>
                            ({likes})
                        </span>
                    </span>
                    <span className="level-item has-text-link can-be-selected" aria-label="dislikes">
                        <span className="icon is-small">
                            <i className="fas fa-heart-broken" aria-hidden="true"></i>
                        </span>
                        <span>
                            ({dislikes})
                        </span>
                    </span>
                    </div>
                    <div className="level-right">
                        <p className="level-item">
                            <small>{createdAt}</small><br/>
                        </p>
                    </div>
                </nav>
            </div>
        </article>
    )
}

export const Post = ({loading, error, post}) => {

    let title= loading ? "Cargando" : error ? 'Error' : post ? post.title : 'Sin Titulo', 
        message= loading ? "Cargando" : error ? error.message : post ? post.message : 'Sin Titulo',
        comments= loading || error || !post ? 0 : post.commentsCount,
        likes= loading || error || !post ? 0 : post.likesCount,
        dislikes= loading || error || !post ? 0 : post.dislikesCount,
        createdAt= loading || error || !post ? "..." : getLocalTime(post.createdAt),
        id= loading || error || !post ? 0 : post.id,
        views= loading || error || !post ? "..." : post.views,
        tags= loading || error || !post ? [] : post.tags;

    return (
        <article className="message">
            <div className="message-header">
                <span className="icon">
                    <i className="fas fa-thumbtack" aria-hidden="true"></i>
                </span>
                <p>{title}</p>
                <span className= "button is-light">
                    <span className="icon">
                        <i className="fas fa-hashtag" aria-hidden="true"></i>
                    </span>
                    <span>{id}</span>
                </span>
            </div>
            <div className="message-body">
                <p>
                    {message.length >1500 ? message.slice(0,1500)+" (...)" : message}
                </p>
                <br/>
                <TagsBar
                    loading={loading}
                    error={error}
                    tags={tags}
                    />
                <nav className="level is-mobile">
                    <div className="level-left">
                        <span className="level-item button" aria-label="comments">
                            <span className="icon is-small">
                                <i className="fas fa-comments" aria-hidden="true"></i>
                            </span>
                            <span>
                                ({comments})
                            </span>
                        </span>
                        <span className="level-item has-text-danger can-be-selected" aria-label="likes">
                            <span className="icon is-small">
                                <i className="fas fa-heart" aria-hidden="true"></i>
                            </span>
                            <span>
                                ({likes})
                            </span>
                        </span>
                        <span className="level-item has-text-link can-be-selected" aria-label="dislikes">
                            <span className="icon is-small">
                                <i className="fas fa-heart-broken" aria-hidden="true"></i>
                            </span>
                            <span>
                                ({dislikes})
                            </span>
                        </span>
                        <span className="level-item" aria-label="comments">
                            <span className="icon is-small">
                                <i className="fas fa-eye" aria-hidden="true"></i>
                            </span>
                            <span>
                                ({views})
                            </span>
                        </span>
                    </div>
                    <div className="level-right">
                        <p className="level-item">
                            <small>{createdAt}</small><br/>
                        </p>
                    </div>
                </nav>
            </div>
        </article>
    )
}