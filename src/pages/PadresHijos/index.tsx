import ChildComponent from "./Child";

function PadresHijos() {
  const greeting = "Hola Alfonso";
  const greetings = "Yo bien y ¿tu?";

  return (
    <div>
      <ChildComponent hola={greeting} />
      <ChildComponent comoestas={greetings} />
    </div>
  );
}

export default PadresHijos;

