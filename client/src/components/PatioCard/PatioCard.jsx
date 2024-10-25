import styles from "./PatioCard.module.css";
import ButtonOrange from "../ButtonOrange/ButtonOrange";

const PatioCard = ({ patio, cap }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Linha1}>
        <p>{patio}</p>
        <div className={styles.Bolas}>
          <div className={styles.Bola}></div>
          <div className={styles.Bola}></div>
          <div className={styles.Bola}></div>
        </div>
      </div>
      <div className={styles.Linha2}>
        <p>Veículos disponíveis:{cap}</p>
      </div>
      <ButtonOrange>
        <p>Vizualizar</p>
      </ButtonOrange>
    </div>
  );
};

export default PatioCard;
