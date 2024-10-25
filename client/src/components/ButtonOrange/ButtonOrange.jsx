import { useState } from "react";

import styles from "./ButtonOrange.module.css";

import ModalCarros from "../../components/ModalCarros/ModalCarros";

const ButtonOrange = ({ children, onClick, className = "", ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    setIsModalOpen(true);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`bg-[#f44336] text-white px-8 py-2.5 text-align: center; hover:bg-[#d32f2f] transition-colors text-sm ${className}`}
        {...props}
      >
        {children}
      </button>

      <ModalCarros isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ButtonOrange;
