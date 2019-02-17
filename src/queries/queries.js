import { gql } from 'apollo-boost';

export const GETUSERS_QUERY = gql`
query Busqueda($user: String) {
    getUsers(userName: $user) {
    userName
    id
    email
    role
    image
    createdAt
    updatedAt
    lastLoginAt
    postsCount
    commentsCount
  }
}
`;
