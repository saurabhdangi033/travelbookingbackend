const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Booking {
    id: ID!
    name: String!
    destination: String!
    date: String!
  }

  type Query {
    bookings: [Booking!]
  }

  type Mutation {
    addBooking(name: String!, destination: String!, date: String!): Booking!
  }
`;

module.exports = typeDefs;
