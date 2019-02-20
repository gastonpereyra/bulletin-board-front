import { gql } from 'apollo-boost';

export const POST_LAST = gql`
query {
    Post : 
    getPosts(count: 1, order: CREATED_DESC) {
      id
      title
      message
      createdAt
      likesCount
      dislikesCount
      commentsCount
    }
}
`;
export const POST_TOP_COMMENT = gql`
query {
    Post : 
    getPosts(count: 1, order: COMMENT_DESC) {
      id
      title
      message
      createdAt
      likesCount
      dislikesCount
      commentsCount
    }
}
`;
export const POST_TOP_LIKES = gql`
query {
    Post : 
    getPosts(count: 1, order: LIKES_DESC) {
      id
      title
      message
      createdAt
      likesCount
      dislikesCount
      commentsCount
    }
}
`;