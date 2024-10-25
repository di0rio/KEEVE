import styles from "./Footer.module.css";

import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#f44336] py-3 mt-auto">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <img className={styles.Logo} src={logo} alt="logo keeve" />
        </div>
        <div className={styles.LinksItens}>
        <p className={styles.Escrito}>Feito por: </p>
        <a className={styles.Links}>di0rio </a>
        <p className={styles.Escrito}>e</p>
        <a className={styles.Links}> gustavo-lara</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
