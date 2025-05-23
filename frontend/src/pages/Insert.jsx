import React, { useState } from "react";
import axios from "axios";
import "./Insert.scss";

function Insert() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://aula.local/api/users",
        { name },
        { withCredentials: true }
      );
      console.log(`¡Nombre guardado en MongoDB: ${response.statusText}!`);
      setName("");
    } catch (error) {
      console.log(error);
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

// END
