const Booking = require('../models/Booking');

const resolvers = {
  Query: {
    bookings: async () => {
      return await Booking.find();
    },
  },
  Mutation: {
    addBooking: async (_, args) => {
      const newBooking = new Booking(args);
      return await newBooking.save();
    },
  },
};

module.exports = resolvers;
