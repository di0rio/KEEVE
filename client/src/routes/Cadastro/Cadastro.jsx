import logo from "../../assets/logo.png";

const Cadastro = () => {
  return (
    <div className="min-h-screen flex bg-gray-900">
      <div className="w-1/2 bg-red-500 p-12 flex flex-col justify-center items-center text-white">
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

      <div className="w-1/2 bg-white p-12 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <h2 className="text-6xl font-bold text-red-500 mb-12 text-center">
            CADASTRO
          </h2>

          <form className="space-y-6">
            <div>
              <div className="relative">
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:border-red-500"
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
                  className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:border-red-500"
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
                  className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:border-red-500"
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
