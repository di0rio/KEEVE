import logo from "../../assets/logo.png";

import styles from "./Cadastro.module.css";

const Cadastro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className="text-center">
          <h2 className="text-2xl mb-4">Bem-vindo ao</h2>
          <img src={logo} alt="Logo KEEVE" />
          <p className="text-2xl">
            Um sistema desenvolvido
            <br />
            para aluguel de veículos.
          </p>
        </div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <h2 className="text-5xl font-bold text-red-500 mb-12 text-center">
            CADASTRO
          </h2>

          <form className="space-y-6">
            <div>
              <div className="relative">
                <input
                  type="email"
                  className="w-full pl-8 pr-1 py-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent shadow-sm"
                  placeholder="E-mail"
                  required
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="password"
                  className="w-full pl-8 pr-1 py-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent shadow-sm"
                  placeholder="Senha"
                  required
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="password"
                  className="w-full pl-8 pr-1 py-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent shadow-sm"
                  placeholder="Confirmar senha"
                  required
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="tel"
                  className="w-full pl-8 pr-1 py-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent shadow-sm"
                  placeholder="Telefone"
                  required
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="cpf"
                  className="w-full pl-8 pr-1 py-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent shadow-sm"
                  placeholder="CPF"
                  required
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              CADASTRE-SE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
