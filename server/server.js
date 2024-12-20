const express = require('express');
const checkAuth = require('./middlewares/checkAuth');
const app = express();

app.use(express.json());

// Routes pour l'authentification
app.use(require("./routes/security"));

// Routes pour les articles
app.use('/articles', require('./routes/articles'));

// Routes pour les magasins
app.use('/shop',require('./routes/shop'));

// Middleware de gestion des erreurs
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

// Lancer le serveur
app.listen(3000, () => console.log('Server listening on port 3000'));
