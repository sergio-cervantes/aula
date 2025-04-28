const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://mongo:27017/aula", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a MongoDB");
    app.listen(PORT, () => {
      console.log(`Express escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error conectando a MongoDB:", err);
    process.exit(1);
  });

app.get("/health", (req, res) => res.send("OK"));

app.post("/api/users", (req, res) => {
  console.log("/api/users");
  const { name } = req.body;
  console.log(`Nombre recibido: ${name}`);
  res.json({ message: `¡Nombre ${name} recibido correctamente!` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Escuchando desde el fondo en http://localhost:${PORT}`);
});
