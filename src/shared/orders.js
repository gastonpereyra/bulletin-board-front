const ID_ASC = {
    value: 'ID_ASC',
    title: 'ID, 0 ->'
};
  
const ID_DESC = {
    value: 'ID_DESC',
    title: 'ID, -> 0'
};
const CREATED_ASC= {
    value: 'CREATED_ASC',
    title: 'Fecha Creado, Viejo Primero'
};
const CREATED_DESC= {
    value: 'CREATED_DESC',
    title: 'Fecha Creado, Nuevo Primero'
};
const UPDATED_ASC= {
    value: 'UPDATED_ASC',
    title: 'Fecha Editado, Viejo Primero'
};
const UPDATED_DESC= {
    value: 'UPDATED_DESC',
    title: 'Fecha Editado, Nuevo Primero'
};
const USERNAME_ASC= {
    value: 'USERNAME_ASC',
    title: 'Nombre de Usuario, A-Z'
};
const USERNAME_DESC= {
    value: 'USERNAME_DESC',
    title: 'Nombre de Usuario, Z-A'
};
const POST_ASC= {
    value: 'POST_ASC',
    title: 'Total de Mensajes, Menos a Más'
};
const POST_DESC= {
    value: 'POST_DESC',
    title: 'Total de Mensajes, Más a Menos'
};
const COMMENT_ASC= {
    value: 'COMMENT_ASC',
    title: 'Total de Comentarios, Menos a Más'
};
const COMMENT_DESC= {
    value: 'COMMENT_DESC',
    title: 'Total de Comentarios, Más a Menos'
};
const AUTHOR_ASC= {
    value: '_ASC',
    title: 'Nombre de Autor, A-Z'
};
const AUTHOR_DESC= {
    value: '_DESC',
    title: 'Nombre de Autor, Z-A'
};
const LIKES_ASC= {
    value: 'LIKES_ASC',
    title: 'Me Gusta, Menos a Más'
};
const LIKES_DESC= {
    value: 'LIKES_DESC',
    title: 'Me Gusta, Más a Menos'
};
const DISLIKES_ASC= {
    value: 'DISLIKES_ASC',
    title: 'No Me Gusta, Menos a Más'
};
const DISLIKES_DESC= {
    value: 'DISLIKES_DESC',
    title: 'No Me Gusta, Más a Menos'
};
const POSTID_ASC= {
    value: 'POSTID_ASC',
    title: 'ID del Post, 0 ->'
};
const POSTID_DESC= {
    value: 'POSTID_DESC',
    title: 'ID del Post, -> 0'
};
const NAME_ASC= {
    value: 'NAME_ASC',
    title: 'Nombre, A-Z'
};
const NAME_DESC= {
    value: 'NAME_DESC',
    title: 'Nombre, Z-A'
};
const ORDER= {
    value: null,
    title: 'Nivel de Usuario'
}

export const USER_ORDER = [ORDER, USERNAME_ASC, USERNAME_DESC, ID_ASC, ID_DESC, CREATED_ASC, CREATED_DESC, UPDATED_ASC, UPDATED_DESC, POST_ASC, POST_DESC, COMMENT_ASC, COMMENT_DESC];
export const POST_ORDER = [ORDER, CREATED_DESC, CREATED_ASC, ID_ASC, ID_DESC, UPDATED_ASC, UPDATED_DESC, AUTHOR_ASC, AUTHOR_DESC, COMMENT_ASC, COMMENT_DESC, LIKES_ASC, LIKES_DESC, DISLIKES_ASC, DISLIKES_DESC];
export const TAG_ORDER = [ORDER, ID_ASC, ID_DESC, NAME_ASC, NAME_DESC, CREATED_ASC, CREATED_DESC, POST_ASC, POST_DESC];
export const COMMENT_ORDER = [ORDER, CREATED_DESC, CREATED_ASC, ID_ASC, ID_DESC, CREATED_ASC, CREATED_DESC, UPDATED_ASC, UPDATED_DESC, POSTID_ASC, POSTID_DESC, AUTHOR_ASC, AUTHOR_DESC];