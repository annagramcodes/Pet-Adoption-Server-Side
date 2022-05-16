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
  console.log({ name });

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
      .then((user) => res.redirect(`/profile/${user._id}`))
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
      .then((user) => res.redirect(`/profile/${user._id}`))
      .catch((err) => next(err));
  }
});
router.get("/profile/:id", (req, res, next) => {
  const { id } = req.params;

  User.findById(id).then((user) => {
    res.render("profiles/profile", { user });
  });
});

module.exports = router;
