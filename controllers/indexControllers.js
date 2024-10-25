module.exports = {
  GET: (req, res) => {
    res.render("index");
  },
  GETById: async (req, res) => {
    // work but in this scope project is not suitable
    const db = require("../db/db");
    const { id } = req.params;

    const author = await db.getUserById(Number(id));

    if (!author) {
      res.status(404).send("Author not found");
      return;
    }

    res.send(`Author Name: ${author.user}`);
  },
  RenderById: (req, res) => {
    res.render("message");
  },
};
