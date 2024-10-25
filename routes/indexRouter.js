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
indexRouter.get(
  "/:id",
  (req, res, next) => {
    res.locals.messages = messages;
    res.locals.selectedMessage = messages[req.params.id];
    next();
  },
  indexControllers.RenderById
);

indexRouter.post("/new", (req, res, next) => {
  const { text, user } = req.body;
  messages.push({
    id: messages.length,
    text: text,
    user: user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
