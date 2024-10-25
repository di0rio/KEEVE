import styles from "./ButtonEntrar.module.css";

import { Link } from "react-router-dom";

const ButtonEntrar = () => {
  return (
    <Link className={styles.Link} to="/login">
      <button className="flex items-center gap-2 bg-transparent border-2 border-white-500 text-#f8f3e3-500 hover:bg-#f8f3e3-500 hover:text-#f8f3e3 font-medium px-6 py-2 rounded-lg transition-colors duration-200">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            className={styles.Img}
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        Entrar
      </button>
    </Link>
  );
};

export default ButtonEntrar;
