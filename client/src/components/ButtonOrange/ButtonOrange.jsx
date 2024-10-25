import styles from "./ButtonOrange.module.css";

const ButtonOrange = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#f44336] text-white justify-center align-middle df px-4 py-1 hover:bg-[#d32f2f] transition-colors text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonOrange;
