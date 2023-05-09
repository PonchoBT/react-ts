import React, { useState } from "react";

function ContadorLimite() {
  const [state, setState] = useState({ count: 0, counts: 0, limite: false });

  const increment2 = () => {
   setState(prevState => ({
      count: prevState.count + 1,
      counts: prevState.counts + 2,
      limite: prevState.count + 1 === 10 ? true : false
    }));
    if (state.count === 9) {
      onAlert();
    }
  };
  const onAlert = () => {
    alert("¡Botón clicado!");
  };

  const onClearAll = () => {
    setState({ count: 0, counts: 0, limite: false });
  };

  return (
    <div>
      <p>Contador: {state.count}</p>
      <p>Contador doble: {state.counts}</p>
      <button onClick={increment2} disabled={state.limite}>
        Incrementar
      </button>
      <button onClick={onClearAll}>Limpiar todo</button>
    </div>
  );
}

export default ContadorLimite;



// import React, { useState } from "react";

// function Counter() {
//   const [state, setState] = useState({ count: 0, counts: 0, limite: false });

//   const increment2 = () => {
//     setState({
//       count: state.count + 1,
//       counts: state.counts + 2
//     });
//     if (state.count === 10) {
//       onAlert();
//       setState({
//         limite: true
//       });
//     }
//   };

//   const onAlert = () => {
//     alert("¡Botón clicado!");
//   };

//   const onClearAll = () => {
//     setState({ count: 0, counts: 0 });
//   };

//   return (
//     <div>
//       <p>Contador: {state.count}</p>
//       <p>Contador doble: {state.counts}</p>
//       <button onClick={increment2} disabled={state.limite}>
//         Incrementar
//       </button>
//       <button onClick={onClearAll}>Limpiar todo</button>
//     </div>
//   );
// }

// export default Counter;
