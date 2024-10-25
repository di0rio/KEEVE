import { useState } from "react";

import styles from "./CardCarros.module.css";

import manual from "../../assets/manual.png";
import portass from "../../assets/portas.png";
import capacidade from "../../assets/capacidade.png";

import ModalCompra from "../ModalCompra/ModalCompra";

const CardCarros = ({ onClose: parentModalClose }) => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const carros = [
    {
      id: 1,
      nome: "NOME DO CARRO",
      tipo: "VSR",
      preco: 700,
      manual: true,
      capacidade: 7,
      portas: 4,
    },
    // Add more cars as needed
  ];

  const handleAlugar = (carro) => {
    setSelectedCar(carro);
    setShowPurchaseModal(true);
    // Optionally close the parent modal when opening the purchase modal
    if (parentModalClose) {
      parentModalClose();
    }
  };

  const handleClosePurchaseModal = () => {
    setShowPurchaseModal(false);
    setSelectedCar(null);
  };

  return (
    <>
      <div className={styles.Cards}>
        {carros.map((carro) => (
          <div
            key={carro.id}
            className="bg-white w-100 shadow-lg overflow-hidden"
          >
            <div className="w-full h-48 bg-[#f44336]"></div>

            <div className="p-4">
              <h3 className="text-xl text-gray-500 font-bold">{carro.nome}</h3>
              <p className="text-gray-600 text-sm">{carro.tipo}</p>

              <div className="flex items-center gap-4 my-3">
                {carro.manual && (
                  <div className="flex items-center gap-1">
                    <img
                      src={manual}
                      alt="ícone de direção manual"
                      className="w-3.5 h-3.5"
                    />
                    <span className="text-gray-500 text-sm">Manual</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <img
                    src={capacidade}
                    alt="ícone de capacidade"
                    className="w-3.5 h-3.5"
                  />
                  <span className="text-gray-500 text-sm">
                    {carro.capacidade}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src={portass}
                    alt="ícone de portas"
                    className="w-3.5 h-3.5"
                  />
                  <span className="text-gray-500 text-sm">{carro.portas}</span>
                </div>
              </div>

              <div className="flex items-center mt-4 gap-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg text-gray-500 font-bold">
                    R$ {carro.preco.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-600">/Dia</span>
                </div>
                <button
                  className="bg-[#f44336] text-white px-8 py-2 hover:bg-[#d32f2f] transition-colors text-sm font-medium"
                  onClick={() => handleAlugar(carro)}
                >
                  Alugar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ModalCompra
        isOpen={showPurchaseModal}
        onClose={handleClosePurchaseModal}
        carro={selectedCar}
      />
    </>
  );
};

export default CardCarros;
