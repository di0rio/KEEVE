import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import logo from "../../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google Sign-In Success:", credentialResponse);
    const decoded = jwt_decode(credentialResponse.credential);

    setName(decoded.name);
    setEmail(decoded.email);
    setProfilePic(decoded.picture);
    setIsLoggedIn(true);
  };

  const handleGoogleError = (error) => {
    console.error("Google Sign-In Error:", error);
    setIsLoggedIn(false);
  };

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
        <h2 className="text-6xl font-bold text-red-500 mb-12 text-center">LOGIN</h2>
          {isLoggedIn ? (
            <div className="text-center space-y-4">
              <img
                src={profilePic}
                alt="Profile"
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-600">{email}</p>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full py-3 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
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

              <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                  theme="outline"
                  size="large"
                  width="100%"
                  text="continue_with"
                  shape="rectangular"
                />
              </GoogleOAuthProvider>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                ENTRAR
              </button>
            </form>
          )}

          <div className="mt-4 text-center text-sm">
            <Link to="/cadastro">
              <span className="text-red-500 hover:underline cursor-pointer">
                Não tem conta? Cadastre-se
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
