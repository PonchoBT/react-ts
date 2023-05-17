const names = ["Juan", "María", "Luis", "Ana", "Alfonso"];

function MapSinApi() {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
export default MapSinApi;
