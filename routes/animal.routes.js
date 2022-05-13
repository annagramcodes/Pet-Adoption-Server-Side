const router = require("express").Router();
const Animal = require("../models/Animal.model");
const mongoose = require("mongoose");


/////////////////////////////
// CREATING ADOPTION POSTS //
router.get("/adoption-post/create", (req, res, next) => {
  res.render("animals/create-adoption-post.hbs")
})

router.post("/adoption-post/create", (req, res, next) => {
    const { name, age, color, species, breed, imageUrl } = req.body;
    
    Animal.create({ name, age, color, species, breed, imageUrl })
        .then((animal) =>
            res.send('okay'))
        .catch((err) => next(err))
        // res.redirect(`/animals/${animal._id}`) 
})


//////////////////////////////////////////
// RENDERING THE LIST OF ADOPTION POSTS //

router.get("/animals-for-adoption/cats", (req, res, next) => {

    Animal.find({ species: 'cat' })
        .then((animal) => {
            res.render("animals/animal-list.hbs", { animal });
    
        })
        .catch((err) => next(err))
});


router.get("/animals-for-adoption/dogs", (req, res, next) => {

    Animal.find({ species: 'dog' })
        .then((animal) => {
            res.render("animals/animal-list.hbs", { animal });
    
        })
        .catch((err) => next(err))
});

module.exports = router;