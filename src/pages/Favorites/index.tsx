import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import RepositoryList from "../../components/RepositoryList";

export default function Favorites(){
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Modal />
      <Header />
      <RepositoryList isFavorite />
    </GestureHandlerRootView>
  )
}