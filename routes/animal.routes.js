const router = require("express").Router();
const Animal = require("../models/Animal.model");
const mongoose = require("mongoose");


router.get("/adoption-post/create", (req, res, nextt) => {
res.render("animals/create-adoption-post.hbs")
})

router.post("/adoption-post/create", (req, res, next) => {
    const { name, age, color, species, breed, imageUrl } = req.body;

    Animal.create({ name, age, color, species, breed, imageUrl })
        .then((animal) =>
            console.log(animal))
        // res.redirect(`/animals/${animal._id}`)
})



// router.get("/animals-for-adoption", (res, req, next) =>
//   Animal.find({})
//     .then((animals) => {
//       res.render("animals/animal-list.hbs", { animals });
//     })
//     .catch((err) => next(err))
// );

module.exports = router;