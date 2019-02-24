// Modulos
import React from 'react';
import { Link } from 'react-router-dom';

// Default
const tagDefault= {
    id: 0,
    name: "",
    postsCount: 0,
    createdAt: "..."
}

// Componente Para UN Tag
export  const Tag = ({tag=tagDefault, isLoading=false, isError=false, isLarge=false}) => {

    const tagIcon = isLoading ? "fas fa-spinner fa-spin" : isError ? "fas fa-times" : "fas fa-hashtag";
    const name = isLoading ? "Cargando" : isError ? "Error" : tag.name;
    const posts= isLoading || isError ? 0 : tag.postsCount;
    const id= isLoading || isError ? 0 : tag.id;

    return (
        <div className="tags has-addons">
            <p className={"tag is-dark"+ (isLarge? " is-large" : " is-normal")}>
                <span className="icon is-small">
                    <i className={tagIcon} aria-hidden="true"></i>
                </span>
            </p>
            <Link to={`/tag/${id}`} className={"tag is-link"+ (isLarge? " is-large" : " is-normal")}>{name}</Link>
            {posts>0 && <Link to={`/tag/${id}`} className={"tag is-primary"+ (isLarge? " is-large" : " is-normal")}>({posts})</Link>}
        </div>
    )
}

// Componente para una Lista de Tags
export const TagsList = ({loading, error, tags}) => {
    if (loading) 
        return (
            <Tag isLoading isLarge/>
        )
    if (error) 
        return (
            <Tag isError isLarge/>
        )
    
    return (
        <div className="field is-grouped is-grouped-multiline">
            {tags.map(tag => (
                <div className="control" key={tag.id}>
                    <Tag
                        tag={tag}
                        isLarge
                        />
                </div>
            ))}
        </div>
    )
};

// Componente para un barra de Tags
export const TagsBar = ({loading, error, tags}) => {
    if (loading) 
        return (
            <Tag isLoading />
        )
    if (error) 
        return (
            <Tag isError />
        )
    return (
        <nav className="level is-mobile">
            <div className="level-left">
                {tags.map(tag => (
                    <div className="level-item" key={tag.id}>
                        <Tag
                            tag={tag}
                            posts= {tag.postCount}
                            />
                    </div>
                ))}
            </div>
        </nav>
    )
};