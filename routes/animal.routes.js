const router = require("express").Router();
const Animal = require("../models/Animal.model");
const mongoose = require("mongoose");
const User = require("../models/User.model");

const fileUploader = require("../config/cloudinary.config");
const res = require("express/lib/response");
const isLoggedIn = require("../middleware/isLoggedIn");

//////////////////////////////////////////
// RENDERING THE LIST OF ADOPTION POSTS //
router.get("/animals-for-adoption/cats", (req, res, next) => {
  Animal.find({ species: "cat" })
    .then((animal) => {
      res.render("animals/animal-list.hbs", { animal });
    })
    .catch((err) => next(err));
});

router.get("/animals-for-adoption/dogs", (req, res, next) => {
  Animal.find({ species: "dog" })
    .then((animal) => {
      console.log(animal);
      res.render("animals/animal-list.hbs", { animal });
    })
    .catch((err) => next(err));
});

/////////////////////////////
// CREATING ADOPTION POSTS //
router.get("/adoption-post/create", isLoggedIn, (req, res, next) => {
  if (isLoggedIn) {
    res.render("animals/create-adoption-post.hbs");
  } else {
    res.redirect("/login");
  }
});

router.post(
  "/adoption-post/create",
  fileUploader.single("animal-img"),
  (req, res, next) => {
    const { name, age, color, species, breed, character, info, imageUrl } =
      req.body;

    Animal.create({
      name,
      age,
      color,
      species,
      breed,
      character,
      info,
      imageUrl: req.file.path,
    })
      .then((animal) => {
        res.redirect(`/adoption-post/${animal._id}`);
      })
      .catch((err) => next(err));
  }
);

////////////////////////////////
// EDITING ADOPTION POSTS ////
router.get("/adoption-post/:id/edit", (req, res, next) => {
  const { id } = req.params;
  Animal.findById(id)
    .then((animal) => {
      res.render("animals/edit-adoption-post", animal);
    })
    .catch((err) => next(err));
});

router.post(
  "/adoption-post/:id/edit",
  fileUploader.single("animal-img"),
  (req, res, next) => {
    const { id } = req.params;
    const { name, age, color, species, breed, character, info, imageUrl } =
      req.body;

    Animal.findByIdAndUpdate(id, {
      name,
      age,
      color,
      species,
      breed,
      character,
      info,
      imageUrl: req.file.path,
    })
      .then((animal) => {
        res.redirect(`/adoption-post/${animal._id}`);
      })
      .catch((err) => next(err));
  }
);

/////////////////////////////
// DELETING ADOPTION POST ///
router.post("/adoption-post/:id/delete", (req, res, next) => {
  const { id } = req.params;

  Animal.findByIdAndRemove(id)
    .then(() => res.redirect("/"))
    .catch((err) => next(err));
});

/////////////////////////////
// VIEWING ADOPTION POST ///
router.get("/adoption-post/:id", (req, res, next) => {
  const { id } = req.params;

  Animal.findById(id).then((animal) => {
    res.render("animals/animal-details", { animal });
  });
});

module.exports = router;
