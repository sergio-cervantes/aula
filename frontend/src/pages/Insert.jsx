import React, { useState } from "react";
import axios from "axios";
import "./Insert.scss";

function Insert() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users", {
        name,
      });
      alert(`¡Nombre guardado en MongoDB: ${response.statusText}!`);
      setName("");
    } catch (error) {
      alert(error);
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
