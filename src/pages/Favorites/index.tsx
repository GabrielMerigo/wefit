import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import RepositoryList from "../../components/RepositoryList";

export default function Favorites(){
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Header />
      <RepositoryList isFavorite />
    </GestureHandlerRootView>
  )
}