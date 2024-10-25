import * as Dialog from "@radix-ui/react-dialog";

import styles from "./ModalCarros.module.css";

import CardCarros from "../CardCarros/CardCarros";

const ModalCarros = ({ isOpen, onClose }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content>
          <Dialog.Title className="text-2xl font-bold mb-4">
            Escolha um Carro
          </Dialog.Title>
          <div className={styles.formContainer}>
            <div className={styles.ContainerCarros}>
              <CardCarros />
              <CardCarros />
              <CardCarros />
              <CardCarros />
            </div>
          </div>
          <Dialog.Close asChild>
            <div className={styles.BtnClose}>
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalCarros;
