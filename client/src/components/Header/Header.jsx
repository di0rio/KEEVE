import styles from "./Header.module.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigation = [{ componente: "/users", name: "Usuários" }];
  return (
    <div className={styles.Main}>
      <div className={styles.Nav}>
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
      <div>
        <Link to="/login">
          <button className={styles.BtnLogin}>
            <ion-icon name="person-circle-outline"></ion-icon>
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
