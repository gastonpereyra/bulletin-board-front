// Modulos
import React from 'react';

const PinPost = ({title, message, comments, likes, dislikes, createdAt}) => {
    return (
        <article class="message">
            <div class="message-header">
                <span class="icon">
                    <i class="fas fa-thumbtack" aria-hidden="true"></i>
                </span>
                <p>{title}</p>
                <button class="button">Abrir</button>
            </div>
            <div class="message-body">
                <p>
                {message.length >500 ? message.slice(0,500)+" (...)" : message}
                </p>
                <br/>
                <nav class="level is-mobile">
                    <div class="level-left">
                    <button className="level-item button" aria-label="comments">
                        <span class="icon is-small">
                            <i class="fas fa-comments" aria-hidden="true"></i>
                        </span>
                        <span>
                            ({comments})
                        </span>
                    </button>
                    <a className="level-item has-text-danger" aria-label="likes">
                        <span class="icon is-small">
                            <i class="fas fa-heart" aria-hidden="true"></i>
                        </span>
                        <span>
                            ({likes})
                        </span>
                    </a>
                    <a className="level-item has-text-link" aria-label="dislikes">
                        <span class="icon is-small">
                            <i class="fas fa-heart-broken" aria-hidden="true"></i>
                        </span>
                        <span>
                            ({dislikes})
                        </span>
                    </a>
                    </div>
                    <div class="level-right">
                        <p className="level-item">
                            <small>{createdAt}</small><br/>
                        </p>
                    </div>
                </nav>
            </div>
        </article>
    )
}

export default PinPost;