import { useContext } from "react";
import { RepositoryProvider } from '../contexts/RepositoryContext';


export default function useRepository(){
  const context = useContext(RepositoryProvider);

  return context;
}