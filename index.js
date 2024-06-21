const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Middleware para parsing do corpo das requisições
app.use(bodyParser.json());

// Rota de autenticação
app.post('/auth', (req, res) => {
    const { username, password } = req.body;

    // Aqui você deve implementar a lógica real de autenticação
    // Este é apenas um exemplo simples
    if (username === 'admin' && password === 'password') {
        res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
        res.status(401).json({ message: 'Usuário ou senha inválidos' });
    }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});