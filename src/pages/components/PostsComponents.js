// Modulos
import React from 'react';

export const PinPost = ({loading, error, post}) => {

    let title='', 
        message='...', 
        comments=0, 
        likes=0, 
        dislikes=0, 
        createdAt="...";

    if (loading) {
        title= "Cargando";
    }

    if (error) {
        title= "Error";
        message= error.message;
        createdAt= Date.now().toISOString();
    }

    if (post) {
        title= post.title;
        message= post.message;
        comments= post.commentsCount;
        likes= post.likesCount;
        dislikes= post.dislikesCount;
        createdAt= new Date(parseInt(post.createdAt)).toISOString().split('T')[0];
    }

    return (
        <article className="message">
            <div className="message-header">
                <span className="icon">
                    <i className="fas fa-thumbtack" aria-hidden="true"></i>
                </span>
                <p>{title}</p>
                <button className="button">Abrir</button>
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