// importo l'array dei posts
const posts = require("../data/posts-menu");

// INDEX
const index = (req, res) => {
  res.json(posts);
};

// SHOW
const show = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((item) => item.id === id);

  res.json(post);
};

// STORE
const store = (req, res) => {
  res.send("Creazione di un nuovo post");
};

// UPDATE
const update = (req, res) => {
  const id = parseInt(req.params.id);

  res.send(`Modifica totale del post con id ${id}`);
};

// MODIFY
const modify = (req, res) => {
  const id = parseInt(req.params.id);

  res.send(`Modifica parziale del post con id ${req.params.id}`);
};

// DESTROY
const destroy = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((item) => item.id === id);

  posts.splice(posts.indexOf(post), 1);

  res.sendStatus(204);
};

// esporto le rotte
module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
