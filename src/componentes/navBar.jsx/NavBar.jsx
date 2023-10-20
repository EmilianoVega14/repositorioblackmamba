import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <a href="/">
        <h1>Black Mamba Grow Shop</h1>
      </a>

      <ul>
        <li>
          <Link to={"/"}>Productos</Link>
        </li>
        <li>
          <Link to={"/productos/picadores"}>Picadores</Link>
        </li>
        <li>
          <Link to={"/productos/sedas"}>Sedas</Link>
        </li>
        <li>
          <Link to={"/productos/tabacos"}>Tabacos</Link>
        </li>
        <li>
          <Link to={"/nosotros"}>Nosotros</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
