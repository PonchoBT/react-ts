// import { useState } from 'react';

// function PadresHijos() {
//   // Se puede definir el state aquí
//   const [name] = useState("Poncho Balderas Torres");

//   // Parent component
//   function Papa() {
//     // Pasamos el state como prop al hijo
//     return <Hijo name={name} />;
//   }

//   // Child component
//   function Hijo(props: any) {
//     return <p>Hello, {props.name}!</p>;
//   }

//   // Renderizamos el componente padre
//   return (
//     <div>
//       <h1>Padres e hijos</h1>
//       <Papa />
//     </div>
//   );
// };

// export default PadresHijos;

import React, { useState } from "react";

function PadresHijos() {
  const [name, setName] = useState("John");

  return (
    <div>
      <h1>Hello from Parent component</h1>
      <Child name={name} handleClick={() => setName("Jane")} />
    </div>
  );
}

interface ChildProps {
  name: string;
  handleClick: () => void;
}

function Child({ name, handleClick }: ChildProps) {
  return (
    <div>
      <h2>Hello from Child component</h2>
      <p>The name is {name}</p>
      <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default PadresHijos;

