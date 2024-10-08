const Booking = require('../models/Booking');

const resolvers = {
  Query: {
    bookings: async () => await Booking.find(),
  },
  Mutation: {
    addBooking: async (_, { name, destination, date }) => {
      const booking = new Booking({ name, destination, date });
      await booking.save();
      return booking;
    },
  },
};

module.exports = resolvers;
