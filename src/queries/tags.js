import { gql } from 'apollo-boost';

export const TAGS = gql`
query ListTag($offset: Int, $order: TagOrder, $name: String){
    Tags : 
    getTags(count: 32, offset: $offset, , name: $name, order: $order) {
      count
      tags {
        id
        name
        createdAt
        postsCount
      }
    }
}
`;

export const TAG_LAST = gql`
query {
    Tag : 
    getTags(count: 5, order: CREATED_DESC) {
      count
      tags {
        id
        name
        createdAt
        postsCount
      }
    }
}
`;
export const TAG_TOP_POST = gql`
query {
    Tag : 
    getTags(count: 5, order: POST_DESC) {
      count
      tags {
        id
        name
        createdAt
        postsCount
      }
    }
}
`;
