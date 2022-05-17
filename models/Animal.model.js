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
  },
  favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

const Animal = model("Animal", animalSchema);

module.exports = Animal;
