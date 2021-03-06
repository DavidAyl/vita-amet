const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Location {
    _id: ID
    name: String!
    image: String
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
    username: String!
    email: String!
    password: String!
    phone: String
    orders: [Order]
  }

  type Order {
    _id: ID
    purchaseDate: String
    items: [Item]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Cart {
    _id: ID
    items: [Item]!
  }

  type Query {
    locations: [Location]
    items: [Item]
    items_by_location(location: String!): [Item]
    users: [User]
    user(id: ID!): User
    me: User
    order: [Order]
    checkout(items: [ID]!): Checkout
  }

  type Mutation {
    addUser(email: String!, username: String!, password: String!, phone: String): Auth
    login(email: String!, password: String!): Auth
    addOrder(items: [ID]!): Order
    clearCart: String!
  }
`;

module.exports = typeDefs;
