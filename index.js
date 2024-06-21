const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
