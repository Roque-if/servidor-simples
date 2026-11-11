const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req,res) => {res.send('Olá, mundo!');});

app.get('/status', (req, res) => {res.json({status: 'ok', hora: new Date().toISOString() })});

app.post('/echo', (req,res) => {res.status(201).json({recebido: req.body })});

app.listen(PORT, () => {console.log(`Servidor rodando em http://localhost:${PORT}`)});

