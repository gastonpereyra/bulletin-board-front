import { gql } from 'apollo-boost';

export const COMMENT_ID = gql`
query viewComment($commentId: Int!){
    Comment : 
    getComment(id: $commentId) {
        id
        message
        createdAt
        author {
            id
            userName
        }
      post {
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

export const COMMENT_NEW = gql`
mutation newComment($postId: Int!, $message: String!) {
  createComment(postId: $postId, message: $message) {
    id
  }
}
`;