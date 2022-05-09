import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $phone: String) {
    addUser(username: $username, email: $email, password: $password,  phone: $phone) {
      token
      user {
        _id
        username
        phone
      }
    }
  }
`;


export const ADD_ORDER = gql`
  mutation addOrder($items: [ID]!) {
    addOrder(items: $items) {
      purchaseDate
      items {
        name
        location
        description
        image
        inStock
        price
      }
    }
  }
`;

export const ADD_CART_ITEM = gql`
  mutation addCartItem($itemId: ID!) {
    addCartItem(itemId: $itemId) {
      _id
      items {
        name
        price
      }
    }
  }
`;


export const CLEAR_CART = gql`
  mutation clearCart{
  clearCart
  }
`;