import styles from "./ToogleTheme.module.css";

import { useTheme } from "../ThemeContext/ThemeContext";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.toggleContainer}>
      <div
        className={`${styles.switch} ${
          theme === "light" ? styles.light : styles.dark
        }`}
        onClick={toggleTheme}
        role="button"
        aria-label="Toggle theme"
        tabIndex={0}
      >
        <button />
        <span />
      </div>
    </div>
  );
};

export default ToggleTheme;
