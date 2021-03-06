// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

hbs.registerHelper('if_eq', function (a, b, opts) {
    return (a == b) ?  opts.fn(this) : opts.inverse(this);
})
hbs.registerHelper('if_neq', function (a, b, opts) {
    return (a != b) ?  opts.fn(this) : opts.inverse(this);
})
hbs.registerHelper('contains', function (a, b, opts) {
    return (a.includes(b)) ?  opts.fn(this) : opts.inverse(this);
})
hbs.registerHelper('notContains', function (a, b, opts) {
    return (!a.includes(b)) ?  opts.fn(this) : opts.inverse(this);
})


const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "Project_2";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

const profileRoute = require("./routes/user.routes");
app.use("/", profileRoute);

const animalRoutes = require("./routes/animal.routes");
app.use("/", animalRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
