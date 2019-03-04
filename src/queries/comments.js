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