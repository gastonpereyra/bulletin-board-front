import { gql } from 'apollo-boost';

export const TAG_LAST = gql`
query {
    Tag : 
    getTags(count: 5, order: CREATED_DESC) {
      id
      name
      createdAt
      postsCount
    }
}
`;
export const TAG_TOP_POST = gql`
query {
    Tag : 
    getTags(count: 5, order: POST_DESC) {
      id
      name
      createdAt
      postsCount
    }
}
`;
