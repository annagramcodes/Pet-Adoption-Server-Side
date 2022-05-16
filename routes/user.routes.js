const router = require("express").Router();
const fileUploader = require("../config/cloudinary.config");
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");

router.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("profiles/profile", { user: req.session.user });
});

router.get("/:id/edit", (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => res.render("profiles/profile-edit", user))
    .catch((err) => next(err));
});

router.post("/:id/edit", fileUploader.single("user-img"), (req, res, next) => {
  const { id } = req.params;
  const { name, email, password, phonenumber, address, birthdate } = req.body;

  if (req.file) {
    User.findByIdAndUpdate(id, {
      name,
      email,
      password,
      phonenumber,
      address,
      birthdate,
      imgUrl: req.file.path,
    })
      .then(() => res.redirect("/profile"))
      .catch((err) => next(err));
  } else {
    User.findByIdAndUpdate(id, {
      name,
      email,
      password,
      phonenumber,
      address,
      birthdate,
    })
      .then(() => res.redirect("/profile"))
      .catch((err) => next(err));
  }
});

module.exports = router;
