
//navbar bootstrap

import React from 'react';

const Navbar = () => {
  return (
    //navbar bootstrap
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className=" m-3 navbar-brand " href="##" >
        Nala-Ecommerce
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#3">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#3">
              Promociones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#3">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;