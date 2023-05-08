import React from "react";
import Logo from "../LazyRouter/logo.png";

const Imagen: React.FC = () => {
  return (
    <div>
      <img src={Logo} alt="Mi imagen"/>
    </div>
  );
};

export default Imagen;