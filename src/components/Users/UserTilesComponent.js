// Modulos
import React from 'react';
import {Link} from 'react-router-dom';

// Imagen por Default
import { imageDefault, imageError, imageLoading} from '../../shared/defaultImages';
// TimeZone
import { getLocalTime } from '../../shared/localTime';

const UserTiles = ({loading, error, user}) => {

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
                                <img className="is-rounded" src={image}/>
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

export default UserTiles;