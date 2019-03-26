const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  neighborhood: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  }
});
const Restaurant = mongoose.model("Restaurants", RestaurantSchema);

module.exports = Restaurant;
