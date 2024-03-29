const typeDefs = `

  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(username: String): [User]
    me: User
  }

  type Mutation {
    createUser(
      username: String!,
      email: String!,
      password: String!
    ): Auth

    login(
      email: String!,
      password: String!
    ): Auth

    saveBook(
      input: BookInput!
    ): User

    removeBook(
      bookId: String!
    ): User
  }
`;

module.exports = typeDefs;
