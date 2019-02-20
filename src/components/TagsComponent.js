// Modulos
import React from 'react';
// Componentes
import Tag from './Tags/TagComponent';

export const TagsList = ({tags}) => {
    return (
        <div class="field is-grouped is-grouped-multiline">
            {tags.map(tag => (
                <div class="control">
                    <Tag
                        name= {tag.name}
                        posts= {tag.postCount}
                        isLarge
                        />
                </div>
            ))}
        </div>
    )
};

export const TagsBar = ({tags}) => {
    return (
        <nav class="level is-mobile">
            <div class="level-left">
                {tags.map(tag => (
                    <div class="level-item">
                        <Tag
                            name= {tag.name}
                            posts= {tag.postCount}
                            />
                    </div>
                ))}
            </div>
        </nav>
    )
};