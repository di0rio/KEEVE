import styles from "./ButtonOrange.module.css";

const ButtonOrange = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#f44336] text-white px-6 py-2 rounded hover:bg-[#d32f2f] transition-colors text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonOrange;
