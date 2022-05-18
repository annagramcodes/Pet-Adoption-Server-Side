const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  name: {
    type: String,
    /* required: [true, "Please input a name"], */
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please input a password"],
  },
  phonenumber: {
    type: Number,
    /* required: Number, */
    unique: true,
  },
  address: {
    type: String,
    /* required: true, */
  },
  /*  zipcode: {
    type: 
  } */
  birthdate: {
    type: String, // ???
    /* required: true, */
  },
  imgUrl: {
    type: String,
    default: "https://res.cloudinary.com/dbjmfu4xr/image/upload/v1652906776/animal-adoption-project/undraw_woman_mevk_qdzvin.svg",
  },
  adoptionPost: [{ type: Schema.Types.ObjectId, ref: "Animal" }],
  favorite: [{ type: Schema.Types.ObjectId, ref: "Animal" }],
});

const User = model("User", userSchema);

module.exports = User;
