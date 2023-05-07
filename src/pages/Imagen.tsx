import myImage from "../pages/logo192.png";

const Imagen = () => {
  return (
    <div>
      <img src={myImage} alt="Mi imagen" />
    </div>
  );
};

export default Imagen;
// import React from "react";

// function MyLazyComponent() {
  
//   return <div>Este es un componente cargado de forma diferida.</div>;
// }

// export default MyLazyComponent;