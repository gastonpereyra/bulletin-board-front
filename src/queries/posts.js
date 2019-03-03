import { gql } from 'apollo-boost';

export const POSTS = gql`
query ListPost($offset: Int, $order: PostOrder, $title: String){
    Posts : 
    getPosts(count: 6, offset: $offset, title: $title, order: $order) {
      count
      posts {
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

export const POST_LAST = gql`
query {
    Post : 
    getPosts(count: 1, order: CREATED_DESC) {
      count
      posts {
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
export const POST_TOP_COMMENT = gql`
query {
    Post : 
    getPosts(count: 1, order: COMMENT_DESC) {
      count
      posts {
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
export const POST_TOP_LIKES = gql`
query {
    Post : 
    getPosts(count: 1, order: LIKES_DESC) {
      count
      posts {
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