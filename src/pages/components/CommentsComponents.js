// Modulos
import React from 'react';
import {Link} from 'react-router-dom';
import { TextArea } from './FieldsComponents';
// TimeZone
import { getLocalTime } from '../../shared/localTime';

export const Comment = ({loading, error, comment}) => {

    let message= comment ? comment.message : '...', 
        author= !comment ? '...' : comment.author ? comment.author.userName : "Anonimo",
        authorId = comment ? comment.author.id : 0,
        id= comment ? comment.id : 0,
        createdAt= comment ? getLocalTime(comment.createdAt) : "...";
        

    if (loading) {
        message= "Cargando";
    }

    if (error) {
        message= "Error: "+error.message;
        createdAt= getLocalTime(Date.now());
    }

    return (
        <article className="message">
            <div className="message-body">
                <p>
                {message.length >500 ? message.slice(0,500)+" (...)" : message}
                </p>
                <br/>
                <nav className="level is-mobile">
                    <div className="level-left">
                        <Link to={`/user/${authorId}`} className="level-item button" aria-label="comments">
                            <span className="icon is-small">
                                <i className="fas fa-user-circle" aria-hidden="true"></i>
                            </span>
                            <span>
                                {author}
                            </span>
                        </Link>
                    </div>
                    <div className="level-right">
                        <p className="level-item">
                            <small>{createdAt}</small><br/>
                        </p>
                        <Link to={`/comment/${id}`} className="level-item button" aria-label="comments">
                            <span className="icon is-small">
                                <i className="fas fa-hashtag" aria-hidden="true"></i>
                            </span>
                            <span>
                                {id}
                            </span>
                        </Link>
                    </div>
                </nav>
            </div>
        </article>
    )
}

export const CommentNew = ({message, setMessage}) => {

    return (
        <article className="message">
            <div className="message-body">
                <TextArea 
                    label= "Mensaje"
                    placeholder= "Ingrese un Mensaje"
                    value= {message}
                    change= {setMessage}
                    rows={10}
                />
            </div>
        </article>
    )
}