import express from 'express';

const SERVER_PORT = 6551;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Deu certoa" });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server iniciado na porta ${SERVER_PORT}`);
});