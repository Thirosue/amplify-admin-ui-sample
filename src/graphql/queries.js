/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        body
        imagePath
      }
      nextToken
    }
  }
`;
