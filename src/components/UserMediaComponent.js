// Modulos
import React from 'react';

const UserMedia = ({name, email, image, createdAt, posts, comments}) => {
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
                            <h3 className="title has-text-white">{name}</h3>
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
                            <a class="level-item" aria-label="posts" title="Mensajes">
                                <span class="icon is-small">
                                    <i class="fas fa-comment-alt" aria-hidden="true"></i>
                                </span>
                                <span>
                                    ({posts})
                                </span>
                            </a>
                            <a class="level-item" aria-label="comments" title="Comentarios">
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