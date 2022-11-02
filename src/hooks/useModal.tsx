import { useContext } from "react";
import { ModalProvider } from '../context/ModalContext';

export default function useModal(){
  const context = useContext(ModalProvider);

  return context;
}