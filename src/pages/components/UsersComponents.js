// Modulos
import React from 'react';
import {Link} from 'react-router-dom';

// Imagen por Default
import { imageDefault, imageError, imageLoading} from '../../shared/defaultImages';
// TimeZone
import { getLocalTime } from '../../shared/localTime';

// Info del User desplegada en Tiles
export const UserTiles = ({loading, error, user}) => {

    let image= (user && user.image) ? user.image : imageDefault, 
    name= (user) ? user.userName : "Usuario Incorrecto" , 
    email= (user) ? user.email :"...", 
    createdAt= (user) ? getLocalTime(user.createdAt,true) : "...", 
    lastLoginAt= (user) ? getLocalTime(user.lastLoginAt,true ) : "...", 
    posts=(user) ? user.postsCount : "...", 
    comments= (user) ? user.commentsCount : "...",
    id= user ? user.id : "...";

    if (loading) {
        image= imageLoading;
        name= "Cargando";
    } 
    if (error) {
        image= imageError;
        name= "Error"
        id= error.message
        createdAt= getLocalTime(Date.now());
    }
    return (
        <div className="tile is-ancestor">
            <div className="tile is-vertical is-2"></div>
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-info">
                            <p className="title">{name}</p>
                            <p className="tags has-addons is-centered">
                                <span className="tag is-large is-light">ID</span>
                                <span className="tag is-large is-dark">
                                    <i className="fas fa-hashtag" aria-hidden="true"></i>
                                </span>
                                <span className="tag is-large is-light">{id}</span>
                            </p>
                            <figure className="image is-360x360">
                                <img className="is-rounded" src={image} alt={`${name}`}/>
                            </figure>
                        </article>
                    </div>
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification is-primary">
                            <p className="title">Info de Usuario</p>
                            <p className="tags has-addons is-centered">
                                <span className="tag is-large is-light">Email</span>
                                <span className="tag is-large is-dark">
                                    <i className="fas fa-at" aria-hidden="true"></i>
                                </span>
                                <span className="tag is-large is-light">{email}</span>
                            </p>
                            <p className="tags has-addons is-centered">
                                <span className="tag is-large is-light">Creación</span>
                                <span className="tag is-large is-dark">
                                    <i className="fas fa-calendar-check" aria-hidden="true"></i>
                                </span>
                                <span className="tag is-large is-light">{createdAt}</span>
                            </p>
                            <p className="tags has-addons is-centered">
                                <span className="tag is-large is-light">Ultima Vez</span>
                                <span className="tag is-large is-dark">
                                    <i className="fas fa-clipboard " aria-hidden="true"></i>
                                </span>
                                <span className="tag is-large is-light">{lastLoginAt}</span>
                            </p>
                        </article>
                        <article className="tile is-child notification is-danger">
                            <p className="title">Info del Tablon</p>
                            <Link to={`/user/${id}/posts`} className="tags has-addons is-centered" title="Ver Mensajes">
                                <span className="tag is-large is-light">Mensajes</span>
                                <span className="tag is-large is-dark">
                                    <i className="fas fa-sticky-note" aria-hidden="true"></i>
                                </span>
                                <span className="tag is-large is-light">{posts}</span>
                            </Link>
                            <Link to={`/user/${id}/comments`} className="tags has-addons is-centered" title="Ver Commentarios">
                                <span className="tag is-large is-light">
                                    Comentarios
                                </span>
                                <span className="tag is-large is-dark">
                                    <i className="fas fa-comments" aria-hidden="true"></i>
                                </span>
                                <span className="tag is-large is-light">{comments}</span>
                            </Link>
                        </article>
                    </div>
                    
                </div>
            </div>
            <div class="tile is-vertical is-2"></div>
        </div>
    )
}

// Media de UN user
export const UserMedia = ({loading, error, user}) => {

    let image=imageDefault, 
        name="", 
        email="...", 
        createdAt="...", 
        posts=0, 
        comments=0,
        id=0;

    if (loading) {
        image= imageLoading;
        name= "Cargando";
    }
    if (error) {
        image= imageError;
        name= "Error"
        createdAt= getLocalTime(Date.now());
    }
    if (user) {
        image= user.image ? user.image : image;
        name= user.userName;
        email= user.email;
        createdAt= getLocalTime(user.createdAt); 
        posts= user.postsCount;
        comments= user.commentsCount
        id= user.id;
    }

    return (
        <div className="box has-background-dark has-text-white">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-128x128">
                        <img src={image} alt={`${name}`}/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <div>
                            <Link to={`/user/${id}`}>
                                <h3 className="title has-text-white">{name}</h3>
                            </Link>
                            <span className="icon is-small">
                                <i className="fas fa-at" aria-hidden="true"></i>
                            </span>
                            <strong className="has-text-white"> Email: </strong>{email}<br/>
                            <span className="icon is-small">
                                <i className="fas fa-calendar-check" aria-hidden="true"></i>
                            </span>
                            <strong className="has-text-white"> Se unió en: </strong>{createdAt}
                        </div>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <Link to={`/user/${id}/posts`} className="level-item button is-link is-outlined is-inverted" aria-label="posts" title="Mensajes">
                                <span className="icon is-small">
                                    <i className="fas fa-comment-alt" aria-hidden="true"></i>
                                </span>
                                <span>
                                    ({posts})
                                </span>
                            </Link>
                            <Link to={`/user/${id}/comments`} className="level-item button is-link is-outlined is-inverted" aria-label="comments" title="Comentarios">
                                <span className="icon is-small">
                                    <i className="fas fa-comments" aria-hidden="true"></i>
                                </span>
                                <span>
                                    ({comments})
                                </span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    )
}