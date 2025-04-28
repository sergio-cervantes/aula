const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.post("/api/users", (req, res) => {
  console.log("/api/users");
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }
  res.json({ message: `¡Nombre ${name} recibido correctamente!` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
