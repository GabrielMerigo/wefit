import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type RepositoryProps = {
  id: string;
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
  }
  stargazers_count?: number;
  language: string;
  html_url: string
}

type RepositoryProviderProps = {
  repositories: RepositoryProps[],
  setRepositories: Dispatch<SetStateAction<RepositoryProps[]>>;
  favoritesRepositories: RepositoryProps[];
  setFavoritesRepositories: Dispatch<SetStateAction<RepositoryProps[]>>;
}

type RepositoryContextProps = {
  children: React.ReactNode;
}

export const RepositoryProvider = createContext({} as RepositoryProviderProps);

export function RepositoryContextProvider({ children }: RepositoryContextProps){
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [favoritesRepositories, setFavoritesRepositories] = useState<RepositoryProps[]>([]);

  useEffect(() => {
    async function getData(){
      const collectionKey = 'wefit:favorites_repositories';
      const data = await AsyncStorage.getItem(collectionKey);
      const parsedData = JSON.parse(data!);
      setFavoritesRepositories(parsedData || []);
    }

    getData();
  }, [])

  return (
    <RepositoryProvider.Provider 
      value={{ 
        repositories, 
        setRepositories, 
        favoritesRepositories,
        setFavoritesRepositories
      }}>
      {children}
    </RepositoryProvider.Provider>
  )
}