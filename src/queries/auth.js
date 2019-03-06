import { gql } from 'apollo-boost';

export const LOGIN = gql`
mutation log($userName: String!, $password: String!){
    logIn(userName: $userName, password: $password) {
        token
    }
}
`;

export const SIGNIN = gql`
mutation sign($userName: String!, $password: String!, $email: String!, $image: String){
    signIn(input:{userName: $userName, password: $password, email: $email, image: $image}) {
        token
    }
}
`;

export const ME = gql`
query {
    me {
        userName
        email
        image
        postsCount
        commentsCount
    }
}
`;