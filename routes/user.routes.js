const router = require("express").Router();
const fileUploader = require("../config/cloudinary.config");
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");
const Animal = require("../models/Animal.model");
const { findByIdAndRemove } = require("../models/User.model");

router.get("/profile", isLoggedIn, (req, res, next) => {
  User.findById(req.session.user._id)
    .populate("adoptionPost")
    .populate("favorite")
    .then((user) => {
      console.log(user);
      res.render("profiles/profile", { user });
    });
});

router.get("/:id/edit", (req, res, next) => {
  const { id } = req.params;

  User.findById(id)
    .then((userform) =>
      res.render("profiles/profile-edit", { userform, user: req.session.user })
    )
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
      .then(() => res.redirect(`/profile`))
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
      .then(() => res.redirect(`/profile`))
      .catch((err) => next(err));
  }
});

router.post("/:id/delete", (req, res, next) => {
  const { id } = req.params;
  User.findById(id).then((user) => {
    const post = user.adoptionPost;
    post.forEach((post) => {
      Animal.findByIdAndRemove(post).then(() => console.log("deleted"));
    });
  });
  User.findByIdAndRemove(id)
    .then(() => {
      req.session.destroy();
      res.redirect("/");
    })
    .catch((err) => next(err));
});

module.exports = router;
