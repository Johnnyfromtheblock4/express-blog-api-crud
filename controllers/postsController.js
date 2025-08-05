// importo l'array dei posts
const posts = require("../data/posts");

// INDEX
const index = (req, res) => {
  //recuperiamo i parametri passati da query string
  const tag = req.query.tag;

  // definiamo un array da restituire
  let filteredPosts = posts;

  // controlliamo il valore di title: se diverso da undefined eseguo il filtraggio
  if (tag) {
    filteredPosts = posts.filter((item) => {
      const lowerTags = item.tags.map((tag) => tag.toLowerCase());

      return lowerTags.includes(tag.toLowerCase());
    });
  }
  res.json(filteredPosts);
};

// SHOW
const show = (req, res) => {
  const id = parseInt(req.params.id);

  //recupero il post con l'id passato come parametro
  const post = posts.find((item) => item.id === id);

  //verifico se post non esiste
  if (!post) {
    return res.status(404).json({
      error: "404 Pagino non trovata",
      message: "Il post non è presente",
    });
  }

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

  //verifico se post non esiste
  if (!post) {
    return res.status(404).json({
      error: "404 Pagino non trovata",
      message: "Il post non è presente",
    });
  }
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
