import { createContext, RefObject, useRef, useState } from "react";

type ModalProviderProps = {
  ref: RefObject<RefProps>;
  onOpen: () => void;
  onClose: () => void;
  showTabBottom: boolean
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
  const [showTabBottom, setShowTabBottom] = useState(false);

  function onOpen(){
    modalRef.current?.open();
    setShowTabBottom(true)
  }

  function onClose(){
    modalRef.current?.close();
    setShowTabBottom(false)
  }

  return (
    <ModalProvider.Provider value={{ onOpen, onClose, ref: modalRef, showTabBottom }}>
      {children}
    </ModalProvider.Provider>
  )
}