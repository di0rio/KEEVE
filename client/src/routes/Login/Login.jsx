import styles from "./Login.module.css";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>Login</div>
      <div>
        <Link to="/home">
          <button type="button" className={styles.Btn}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
