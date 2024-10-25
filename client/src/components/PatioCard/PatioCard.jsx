import styles from "./PatioCard.module.css";

import ButtonOrange from "../ButtonOrange/ButtonOrange"

const PatioCard = ({ city, availableCars }) => {

  return (
    <div className="bg-[#f8f3e3] p-12 shadow-md relative">
      <div className="absolute top-6 right-6">
      </div>
      <div className="space-y-4">
        <h3 className="text-gray-800 text-lg font-medium">{city}</h3>
        <p className="text-gray-700">Carros disponíveis: {availableCars}</p>
        <ButtonOrange>Visualizar</ButtonOrange>
      </div>
    </div>
  );
};

export default PatioCard;
