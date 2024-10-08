const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  title: String,
  firstName: String,
  lastName: String,
  birthDate: Date,
  organisation: String,
  email: String,
  phone: String,
  departure: String,
  destination: String,
  departureDate: Date,
  departureTime: String,
  classOfService: String,
  preferredHotel: String,
  preferredAirlines: String,
  additionalInfo: String
});

module.exports = mongoose.model('Booking', bookingSchema);
