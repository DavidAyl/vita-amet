import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_ITEMS = gql`
  query items {
    items {
      name
      price
      description
      location
      _id
      image
      inStock
    }
  }
`;

export const QUERY_ITEMS_BY_LOCATION = gql`
  query items_by_location($location: String!) {
    items_by_location(location: $location) {
      name
      price
      description
      location
      _id
      image
      inStock
    }
  }
`;

export const QUERY_LOCATION = gql`
  query locations {
    locations {
      name
      image
    }
  }
`;

export const QUERY_ORDER = gql`
  query order {
    order {
      _id
      purchaseDate
      items {
        name
        price
        image
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($items: [ID]!) {
    checkout(items: $items) {
      session
    }
  }
`;
