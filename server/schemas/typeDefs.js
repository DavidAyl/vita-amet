const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Location {
    _id: ID
    name: String!
  }
  type Review {
    _id: ID
    name: String
  }

  type Item {
    _id: ID
    name: String
    location: String
    price: Float!
    description: String!
    image: String
    inStock: Boolean
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    orders: [Order]
  }

  type Order {
  _id: ID
  purchaseDate: String
  itemPurchased: [Item]
  }

  type Checkout {
    session: ID
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
    order(_id: ID!): Order
    checkout(items: [ID]!): Checkout
  }

  type Mutation {
    addUser(email: String!, username: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(items:[ID]!): Order
  }
`;

module.exports = typeDefs;
