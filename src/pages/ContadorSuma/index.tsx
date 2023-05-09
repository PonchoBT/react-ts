import { useState } from "react";

function Counter() {
  const [state, setState] = useState({ count: 0, counts: 0 });

  const increment2 = () => {
    setState({
      count: state.count + 1,
      counts: state.counts + 2
    });
  };

  const onClearAll = () => {
    setState({ count: 0, counts: 0 });
  };

  return (
    <div>
      <p>Contador: {state.count}</p>
      <p>Contador doble: {state.counts}</p>
      <button onClick={increment2}>Incrementar</button>
      <button onClick={onClearAll}>Limpiar todo</button>
    </div>
  );
}

export default Counter;