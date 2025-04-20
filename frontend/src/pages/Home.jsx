import { NavLink } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div>
      <h2>Página de Inicio</h2>
      <NavLink className="menu-link" to="/counter">
        Demostración de ganchos de React
      </NavLink>
      <NavLink className="menu-link" to="/insert">
        Inserción de datos en Mongo
      </NavLink>
    </div>
  );
}

export default Home;
