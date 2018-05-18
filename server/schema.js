export default `
type Query {
  posts(
    filter: String
    skip: Int
    first: Int
    orderBy: PostOrderByInput
  ): PostFeed!
  users: [User!]
  posts: [Post]
}

type PostFeed {
  posts: [Post!]!
  count: Int!
}

type Mutation {
  signup(email: String!, password: String!, name: String!): AuthPayload
  login(email: String!, password: String!): AuthPayload
  writePost(name: String!, content: String!): Post!
  commentPost(postId: ID!): Comment
  likePost(postId: ID!): Like
}

type AuthPayload {
  token: String
  user: User
}

type Post {
  id: ID!
  createdAt: String!
  updatedAt: String!
  name: String!
  content: String!
  postedBy: User!
  comments: [Comment!]
  likes: [Like!]
}

type Comment {
  id: ID!
  createdAt: String!
  text: String!
  postedBy: User!
  post: Post!
}

type Like {
  id: ID!
  user: User!
  post: Post!
}

type User {
  id: ID!
  createdAt: String!
  name: String!
  email: String!
  posts: [Post!]
  comments: [Comment!]
  likes: [Like!]
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  updatedAt_ASC
  updatedAt_DESC
}
`