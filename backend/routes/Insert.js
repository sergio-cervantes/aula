const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect("mongodb://localhost:27017/mern_example", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Modelo de usuario
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: String,
  })
);

// Ruta para guardar el nombre
app.post("/api/users", async (req, res) => {
  try {
    const user = new User({ name: req.body.name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar" });
  }
});

app.listen(5000, () => console.log("Servidor en http://localhost:5000"));
