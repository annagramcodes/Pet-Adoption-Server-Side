const { Schema, model } = require("mongoose");

const animalSchema = new Schema({
  name: String,
  age: Number,
  color: String,
  species: {
    type: String,
    required: [true],
    lowercase: true,
  },
  character: String,
  info: String,
  breed: String,
  imageUrl: {
    type: String,
    required: [true],
    // default:
    //   'https://res.cloudinary.com/mraferreira/image/upload/v1652347918/movie-project/mvc_67565_urfvwr.jpg',
  },
});

const Animal = model("Animal", animalSchema);

module.exports = Animal;
