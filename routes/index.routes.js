const express = require("express");
const res = require("express/lib/response");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  req.app.locals.user = null;
  res.render("index", { user: req.session.user });
});

router.get("/500", (req, res, next) => {
  req.session.user;
  req.app.locals.user = null;
  res.render("500");
});
module.exports = router;
