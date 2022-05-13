const { Schema, model } = require("mongoose");

const animalSchema = new Schema({
    name: String,
    age: Number,
    color: String,
    species: String,
    breed: String,
    imageUrl: {
        type: String,
        // default:
        //   'https://res.cloudinary.com/mraferreira/image/upload/v1652347918/movie-project/mvc_67565_urfvwr.jpg',
      },
})

const Animal = model("Animal", animalSchema);

module.exports = Animal;
