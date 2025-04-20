import React, { useState } from "react";
import axios from "axios";
import "./Insert.scss"; // Import CSS file for styling

function Insert() {
  const [name, setName] = useState("");

  // async function handleSubmit(e)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users", { name });
      alert("¡Nombre guardado en MongoDB!");
      setName("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Ingresa la información requerida</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tu nombre"
        required
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default Insert;
