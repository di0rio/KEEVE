import styles from "./Header.module.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";

// {
/* {navigation.map((nav) => (
  <Link
    className="nav-link nav-item my-3 my-md-none mx-md-3"
    key={nav.name}
    to={nav.componente}
  >
    {nav.name}
  </Link>
))} */
// }

const Header = () => {
  const navigation = [{ componente: "/users", name: "Usuários" }];
  return (
    <div className={styles.container}>
      <nav
        className="navbar navbar-expand-md top-0 container-fluid px-5"
        style={{ background: "#160B28" }}
      >
        {/* 
            data-bs-toggle="collapse": ativa a função de Colapso do Bootstrap, que mostra ou esconde um elemento (data-bs-target)
            data-bs-target="#navbarNav": referencia o elemento que vai ser mostrado ou colapsado
          */}

        {/* Logo do AquaGuardians */}
        <a className={styles.keeve} href="/">
          <img src={logo} alt="" />
        </a>

        {/* Ícone NavBar no Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <i className="bi bi-justify"></i>
        </button>

        {/* Restante da NavBar*/}
        <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
          {/* Header no Mobile */}
          <div className="offcanvas-header px-0">
            <h5 className="offcanvas-title me-5">Nome do Administrador</h5>
            <button
              type="button"
              className="btn-close ms-5 p-0"
              data-bs-dismiss="offcanvas"
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>

          <hr
            className="my-0 mx-4 d-md-none"
            style={{ backgroundColor: "#fff" }}
          />

          {/* Body no Mobile e Links do Nav */}
          <div className="offcanvas-body nav-underline mx-3 d-md-inline-flex justify-content-center">
            {navigation.map((nav) => (
              <Link
                className="nav-link nav-item my-3 my-md-none mx-md-3"
                key={nav.name}
                to={nav.componente}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>

        {/* 
            Dropdown na direita em desktop
          */}
        <div className="d-none d-md-inline-flex">
          <h5 className="my-auto ms-5 me-3">Nome do Administrador</h5>
        </div>
      </nav>
    </div>
  );
};

export default Header;
