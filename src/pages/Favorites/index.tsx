import { GestureHandlerRootView } from "react-native-gesture-handler";
import { EmptyText } from "../../components/EmptyText";
import { Header } from "../../components/Header";
import RepositoryList from "../../components/RepositoryList";
import useRepository from "../../hooks/useRepository";


export default function Favorites(){
  const { favoritesRepositories } = useRepository();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Header />
      {!favoritesRepositories.length
        ? <EmptyText title="Ops... Parece que você ainda não favoritou nenhum repositório." /> 
        : <RepositoryList data={favoritesRepositories} isFavorite />
      }
    </GestureHandlerRootView>
  )
}