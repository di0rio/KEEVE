import styles from "./ModalCompra.module.css";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import logo from "../../assets/logo.png";

const ModalCompra = ({ isOpen, onClose, carro }) => {
  const [dataRetirada, setDataRetirada] = useState({
    dia: "",
    mes: "",
    ano: "",
  });

  const [dataDevolucao, setDataDevolucao] = useState({
    dia: "",
    mes: "",
    ano: "",
  });

  return (
    <div>
      <Dialog.Root open={isOpen} onOpenChange={onClose}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 shadow-lg" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-12 w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Coluna da esquerda */}
              <div className="space-y-4 shadow rounded px-4 py-4">
                <div className="bg-gray-200 w-full h-64"></div>

                <div>
                  <h2 className="text-xl text-gray-600 font-bold">
                    {carro?.nome || "NOME DO CARRO"}
                  </h2>
                  <p className="text-gray-600">Van</p>

                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-gray-600">Manual</span>
                    <span className="text-sm text-gray-600">4 lugares</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-4 text-gray-600">
                    Locais de retirada e devolução
                  </h3>

                  {/* Data de Retirada */}
                  <div className="space-y-2">
                    <div className="flex gap-2 ">
                      <input
                        type="text"
                        placeholder="Dia"
                        className="w-20 p-2 border text-gray-600"
                        value={dataRetirada.dia}
                        onChange={(e) =>
                          setDataRetirada({
                            ...dataRetirada,
                            dia: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Mês"
                        className="w-20 p-2 text-gray-600 border"
                        value={dataRetirada.mes}
                        onChange={(e) =>
                          setDataRetirada({
                            ...dataRetirada,
                            mes: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Ano"
                        className="w-20 p-2 text-gray-600 border"
                        value={dataRetirada.ano}
                        onChange={(e) =>
                          setDataRetirada({
                            ...dataRetirada,
                            ano: e.target.value,
                          })
                        }
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      Retirada: {dataRetirada.dia} de {dataRetirada.mes} de{" "}
                      {dataRetirada.ano} 12:00H
                    </p>
                  </div>

                  {/* Data de Devolução */}
                  <div className="space-y-2 mt-4">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Dia"
                        className="w-20 p-2 text-gray-600 border"
                        value={dataDevolucao.dia}
                        onChange={(e) =>
                          setDataDevolucao({
                            ...dataDevolucao,
                            dia: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Mês"
                        className="w-20 p-2 text-gray-600 border"
                        value={dataDevolucao.mes}
                        onChange={(e) =>
                          setDataDevolucao({
                            ...dataDevolucao,
                            mes: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Ano"
                        className="w-20 p-2 text-gray-600 border"
                        value={dataDevolucao.ano}
                        onChange={(e) =>
                          setDataDevolucao({
                            ...dataDevolucao,
                            ano: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Devolução: {dataDevolucao.dia} de {dataDevolucao.mes} de{" "}
                    {dataDevolucao.ano} 12:00H
                  </p>
                </div>

                <button className="bg-[#f44336] text-white px-4 py-2 mt-4">
                  Confirmar
                </button>
              </div>

              {/* Coluna da direita */}
              <div className="bg-white px-4 py-4 shadow-lg ">
                <h3 className="text-xl font-semibold mb-4 text-gray-600">
                  Detalhes do preço
                </h3>

                <div className="space-y-2 text-gray-600">
                  <p>Taxa do aluguel por dia: R$000</p>
                  <p>Taxa do aluguel por hora: R$000</p>
                </div>

                <div className="mt-6 space-y-2 text-sm text-gray-600">
                  <p>Impostos incluídos</p>
                  <p>Proteção básica contra danos por colisão incluídos</p>
                </div>

                <div className="mt-8">
                  <p className="text-xl font-bold text-gray-600">
                    TOTAL: R$000
                  </p>

                  <div className="flex gap-2 mt-2 text-gray-600">
                    <span>Pagar na retirada</span>
                    <div className="flex gap-2">
                      <img src="/visa.svg" alt="Visa" className="w-6 h-6" />
                      <img
                        src="/mastercard.svg"
                        alt="Mastercard"
                        className="w-6 h-6"
                      />
                      <img
                        src="/amex.svg"
                        alt="American Express"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-[#f44336] text-white py-3 mt-6 font-semibold">
                    RESERVAR
                  </button>
                  <div className={styles.Logo}>
                    <img className="w-120 h-auto" src={logo} alt="Logo KEEVE" />
                  </div>
                </div>
              </div>
            </div>

            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                ✕
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default ModalCompra;
