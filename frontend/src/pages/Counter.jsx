import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  function updateCounter() {
    setCount(count + 1);
  }

  return (
    <div>
      <h3>Demostración de ganchos de React</h3>
      <ul>
        <li>
          Cada que se hace clic en el botón del contador, el valor de éste es
          incrementado en 1, efecto que requiere que su valor sea preservado
          entre llamadas.
        </li>
        <li>
          Para lograr ello se echa mano de un gancho (<i>hook</i>) de React, en
          este caso, el gancho <i>useState</i>.
        </li>
        <li>
          El gancho permite declarar una variable de estado y una función que
          actualiza a este estado.
        </li>
        <li>
          La función de actualización es llamada por una segunda función, la que
          se utiliza para ser llamada como un evento, en nuestro caso, para un
          elemento "button".
        </li>
        <li>
          El parámetro que se le pasa a esa función de actualización es el nuevo
          valor que tendrá la variable de estado.
        </li>
      </ul>
      <button className="button-counter" onClick={updateCounter}>
        Contador: {count}
      </button>
      <NavLink className="navlink-home" to="/" end>
        Ir al inicio
      </NavLink>
    </div>
  );
};

export default Counter;
