const Router = require("express");
const indexControllers = require("../controllers/indexControllers");
const fromControllers = require("../controllers/formController");
const formController = require("../controllers/formController");
const indexRouter = Router();

const messages = [
  { id: 0, text: "Hi there!", user: "Amanda", added: new Date() },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
indexRouter.get("/:name");

indexRouter.get(
  "/",
  (req, res, next) => {
    res.locals.messages = messages;
    next();
  },
  indexControllers.GET
);

indexRouter.get(
  "/new",
  (req, res, next) => {
    res.locals.messages = messages;
    next();
  },
  formController.GET
);

indexRouter.post("/new", (req, res, next) => {
  console.log(req.body.name);
  messages.push({
    id: messages.length,
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
