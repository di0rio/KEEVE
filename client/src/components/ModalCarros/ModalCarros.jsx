import * as Dialog from "@radix-ui/react-dialog";

import styles from "./ModalCarros.module.css"

const ModalCarros = ({ isOpen, onClose }) => {
  const carros = [
    {
      nome: "NOME DO CARRO",
      tipo: "VSR",
      preco: 700,
      manual: true,
      assentos: 4,
    },
    // Adicione mais carros conforme necessário
  ];

  return (
    <Dialog.Root className={styles.formContainer} open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 w-[80vw] max-h-[80vh] overflow-y-auto">
          <Dialog.Title className="text-2xl font-bold mb-4">
            Escolha um Carro
          </Dialog.Title>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {carros.map((carro, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Imagem do Carro */}
                <div className="w-full h-48 bg-[#f44336]"></div>

                {/* Informações do Carro */}
                <div className="p-4">
                  <h3 className="text-xl font-bold">{carro.nome}</h3>
                  <p className="text-gray-600 text-sm">{carro.tipo}</p>

                  {/* Ícones de características */}
                  <div className="flex items-center gap-4 my-3">
                    <div className="flex items-center gap-1">
                      <span className="text-sm">Manual</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm">{carro.assentos} lugares</span>
                    </div>
                  </div>

                  {/* Preço e Botão */}
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <span className="text-lg font-bold">
                        R$ {carro.preco}
                      </span>
                      <span className="text-sm text-gray-600">/Dia</span>
                    </div>
                    <button
                      className="bg-[#f44336] text-gray px-6 py-2 hover:bg-[#d32f2f] transition-colors text-sm"
                      onClick={() => {
                        console.log(`Alugando ${carro.nome}`);
                        onClose();
                      }}
                    >
                      Alugar
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
  );
};

export default ModalCarros;
