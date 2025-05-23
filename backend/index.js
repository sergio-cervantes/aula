const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();

app.use(
  cors({
    origin: "http://aula.local:31000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.path}`);
  next();
});

app.use((err, req, res, next) => {
  console.error(`Error en la petición a ${req.path}:`, err.message);
  res.status(500).json({ error: "Error interno del servidor" });
});

mongoose
  .connect("mongodb://mongo:27017/aula", {
    useNewUrlParser: true,
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Escuchando desde el fondo a http://localhost:${PORT}`);
});

// END
