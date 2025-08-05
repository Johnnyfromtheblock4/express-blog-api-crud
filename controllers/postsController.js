// importo l'array dei posts
const posts = require("../data/posts");

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

  //recupero il post
  const post = posts.find((item) => item.id === id);

  //cancello il post dall'array
  posts.splice(posts.indexOf(post), 1);

  //restituisco lo status 204 per aver cancellato con successo il post dall'array
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
