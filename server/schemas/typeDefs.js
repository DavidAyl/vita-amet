const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Location {
    _id: ID
    name: String!
  }

  type Item {
    _id: ID
    name: String!
    location: String!
    price: Float!
    description: String!
    image: String!
    inStock: Boolean
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    locations: [Location]
    items: [Item]
    users: [User]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    addUser(email: String!, username: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
