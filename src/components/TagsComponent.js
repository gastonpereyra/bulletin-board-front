// Modulos
import React from 'react';
// Componentes
import Tag from './Tags/TagComponent';

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
        <div class="field is-grouped is-grouped-multiline">
            {tags.map(tag => (
                <div class="control">
                    <Tag
                        tag={tag}
                        isLarge
                        />
                </div>
            ))}
        </div>
    )
};

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
        <nav class="level is-mobile">
            <div class="level-left">
                {tags.map(tag => (
                    <div class="level-item">
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