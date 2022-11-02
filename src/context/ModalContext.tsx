import { createContext, RefObject, useRef, useState } from "react";

type ModalProviderProps = {
  ref: RefObject<RefProps>;
  onOpen: () => void;
  onClose: () => void;
  modalIsOpen: boolean
}

type RefProps = {
  open: () => void;
  close: () => void;
}

type ModalContextProviderProps = {
  children: React.ReactNode;
}

export const ModalProvider = createContext({} as ModalProviderProps)


export function ModalContextProvider({ children }: ModalContextProviderProps){
  const modalRef = useRef<RefProps>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function onOpen(){
    modalRef.current?.open();
    setModalIsOpen(true)
  }

  function onClose(){
    modalRef.current?.close();
    setModalIsOpen(false)
  }

  return (
    <ModalProvider.Provider value={{ onOpen, onClose, ref: modalRef, modalIsOpen }}>
      {children}
    </ModalProvider.Provider>
  )
}