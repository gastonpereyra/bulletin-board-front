import { gql } from 'apollo-boost';

export const LOGIN = gql`
mutation log($userName: String!, $password: String!){
    logIn(userName: $userName, password: $password) {
        token
    }
}
`;