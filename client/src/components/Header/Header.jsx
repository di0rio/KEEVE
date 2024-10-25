import styles from "./Header.module.css";

import logo from "../../assets/logo.png";
import ButtonEntrar from "../ButtonEntrar/ButtonEntrar";
import ToogleTheme from "../ToogleTheme/ToogleTheme";

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
  // const navigation = [{ componente: "/users", name: "Usuários" }];
  return (
    <div className={styles.container}>
      <nav
        className="flex justify-between items-center px-4"
        style={{ background: "#EF4733" }}
      >
        <a className={styles.keeve} href="/">
          <img src={logo} alt="" />
        </a>
        <div className={styles.ContBtn}>
          <div className={styles.Toogle}>
            <ToogleTheme />
          </div>
          <div>
            <ButtonEntrar />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

{
  /* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <i className="bi bi-justify"></i>
        </button> */
}

{
  /* <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
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
          /> */
}

{
  /* Body no Mobile e Links do Nav */
}
{
  /* <div className="offcanvas-body nav-underline mx-3 d-md-inline-flex justify-content-center">
            {navigation.map((nav) => (
              <Link
                className="nav-link nav-item my-3 my-md-none mx-md-3"
                key={nav.name}
                to={nav.componente}
              >
                {nav.name}
              </Link>
            ))}
          </div> */
}
{
  /* </div> */
}
