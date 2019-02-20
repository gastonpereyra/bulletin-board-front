// Modulos
import React from 'react';

const Tag = ({name, posts=0, isLarge=false}) => {
    return (
        <div className="tags has-addons">
            <a className={"tag is-dark"+ (isLarge? " is-large" : " is-normal")}>
                <span className="icon is-small">
                    <i className="fas fa-hashtag" aria-hidden="true"></i>
                </span>
            </a>
            <a className={"tag is-link"+ (isLarge? " is-large" : " is-normal")}>{name}</a>
            {posts>0 && <a className={"tag is-primary"+ (isLarge? " is-large" : " is-normal")}>({posts})</a>}
        </div>
    )
}

export default Tag;