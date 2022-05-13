const { Schema, model } = require("mongoose");

const animalSchema = new Schema({
    name: String,
    age: Number,
    color: String,
    species: String,
    breed: String,
    imageUrl: String, 
})

const Animal = model("Animal", animalSchema);

module.exports = Animal;
