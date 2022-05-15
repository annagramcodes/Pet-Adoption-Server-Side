const router = require("express").Router();
const Animal = require("../models/Animal.model");
const mongoose = require("mongoose");
const fileUploader = require("../config/cloudinary.config");

/////////////////////////////
// CREATING ADOPTION POSTS //
router.get("/adoption-post/create", (req, res, next) => {
  res.render("animals/create-adoption-post.hbs");
});

router.post(
  "/adoption-post/create",
  fileUploader.single("animal-img"),
  (req, res, next) => {
    const { name, age, color, species, breed, imageUrl } = req.body;

    Animal.create({ name, age, color, species, breed, imageUrl: req.file.path })
      .then((animal) => {
        res.redirect(`/adoption-post/${animal._id}`);
      })
      .catch((err) => next(err));
  }
);
/////////////////////////////
// VIEWING ADOPTION POST ///

router.get("/adoption-post/:id", (req, res, next) => {
  const { id } = req.params;

    Animal.findById(id).then((animal) => {
        res.render("animals/animal-details", { animal })
    }
  );
});

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

module.exports = router;
