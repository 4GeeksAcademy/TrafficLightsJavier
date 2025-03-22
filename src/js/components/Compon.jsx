import { useState } from "react";

export function Compon() {
  const [estado, setEstado] = useState(valorInicial);

  return (
    <div>
      <p>{estado}</p>
      <button onClick={() => setEstado("Nuevo valor")}>Cambiar estado</button>
    </div>
  );
}