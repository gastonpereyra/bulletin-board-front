// Modulos
import React from 'react';
import {Link} from 'react-router-dom';

// Imagen por Default
const imageDefault = "/assets/images/user.gif"
const imageError = "/assets/images/error.gif"
const imageLoading = "/assets/images/preloader.gif"

const UserMedia = ({loading, error, user}) => {

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
        createdAt= Date.now().toISOString();
    }
    if (user) {
        image= user.image ? user.image : image;
        name= user.userName;
        email= user.email;
        createdAt= new Intl.DateTimeFormat().format(user.createdAt); 
        posts= user.postsCount;
        comments= user.commentsCount
        id= user.id;
    }

    return (
        <div class="box has-background-dark has-text-white">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-128x128">
                        <img src={image} alt="Image"/>
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <Link to={`/user/${id}`}>
                                <h3 className="title has-text-white">{name}</h3>
                            </Link>
                            <span class="icon is-small">
                                <i class="fas fa-at" aria-hidden="true"></i>
                            </span>
                            <strong className="has-text-white"> Email: </strong>{email}<br/>
                            <span class="icon is-small">
                                <i class="fas fa-calendar-check" aria-hidden="true"></i>
                            </span>
                            <strong className="has-text-white"> Se unió en: </strong>{createdAt}
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <a class="level-item button is-link is-outlined is-inverted" aria-label="posts" title="Mensajes">
                                <span class="icon is-small">
                                    <i class="fas fa-comment-alt" aria-hidden="true"></i>
                                </span>
                                <span>
                                    ({posts})
                                </span>
                            </a>
                            <a class="level-item button is-link is-outlined is-inverted" aria-label="comments" title="Comentarios">
                                <span class="icon is-small">
                                    <i class="fas fa-comments" aria-hidden="true"></i>
                                </span>
                                <span>
                                    ({comments})
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    )
}

export default UserMedia;