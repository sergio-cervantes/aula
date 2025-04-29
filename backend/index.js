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
  })
  .catch((err) => {
    console.error("Error conectando a MongoDB:", err);
    process.exit(1);
  });

app.get("/health", (req, res) => res.send("OK"));

app.post("/api/users", async (req, res) => {
  console.log("/api/users");
  const { name } = req.body;
  console.log(`Nombre recibido: ${name}`);
  try {
    const newUser = new User({ name });
    const savedUser = await newUser.save();
    res.status(201).json({
      message: `¡Nombre ${savedUser.name} guardado correctamente!`,
      id: savedUser._id,
    });
  } catch (error) {
    console.error("Error guardando el nombre:", error);
    res.status(500).json({ message: "Error guardando el nombre" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Escuchando desde el fondo en http://localhost:${PORT}`);
});
