// Modulos
import React from 'react';

// Default
const tagDefault= {
    id: 0,
    name: "",
    postsCount: 0,
    createdAt: "..."
}

const Tag = ({tag=tagDefault, isLoading=false, isError=false, isLarge=false}) => {

    const tagIcon = isLoading ? "fas fa-spinner fa-spin" : isError ? "fas fa-times" : "fas fa-hashtag";
    const name = isLoading ? "Cargando" : isError ? "Error" : tag.name;
    const posts= isLoading || isError ? 0 : tag.postsCount;

    return (
        <div className="tags has-addons">
            <p className={"tag is-dark"+ (isLarge? " is-large" : " is-normal")}>
                <span className="icon is-small">
                    <i className={tagIcon} aria-hidden="true"></i>
                </span>
            </p>
            <a className={"tag is-link"+ (isLarge? " is-large" : " is-normal")}>{name}</a>
            {posts>0 && <a className={"tag is-primary"+ (isLarge? " is-large" : " is-normal")}>({posts})</a>}
        </div>
    )
}

export default Tag;