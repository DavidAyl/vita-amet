const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Locations {
    _id: ID
    name: String!
  }
  type Item {
    _id: ID
    name: String!
    location: String!
    price: Int!
    description: String!
    image: String!
    inStock: Bool
    reviews: [Reviews]
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
    location: [Locations]
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
