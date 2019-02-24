import { gql } from 'apollo-boost';

export const USER_LAST = gql`
query {
    User : 
    getUsers(count: 1, order: CREATED_DESC) {
      userName
      id
      email
      image
      createdAt
      postsCount
      commentsCount
    }
}
`;

export const USER_TOP_POST = gql`
query {
    User : 
    getUsers(count: 1, order: POST_DESC) {
      userName
      id
      email
      image
      createdAt
      postsCount
      commentsCount
    }
}
`;

export const USER_TOP_COMMENT = gql`
query {
    User : 
    getUsers(count: 1, order: COMMENT_DESC) {
      userName
      id
      email
      image
      createdAt
      postsCount
      commentsCount
    }
}
`;

export const USER_ID = gql`
query ViewUser($userId: Int!) {
  User:
  getUser(id: $userId) {
    id
    userName
    email
    image
    createdAt
    updatedAt
    lastLoginAt
    postsCount
    commentsCount
  }
}
`;

export const USER_POSTS = gql`
query ViewUser($userId: Int!, $offset: Int) {
  User:
  getUser(id: $userId) {
    id
    userName
    email
    image
    createdAt
    postsCount
    commentsCount
    posts(count: 6, offset: $offset){
      id
      title
      message
      createdAt
      likesCount
      dislikesCount
      commentsCount
    }
  }
}
`;