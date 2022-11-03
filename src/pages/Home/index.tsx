import { Header } from "../../components/Header";
import RepositoryList from '../../components/RepositoryList';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Home(){
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Header />
      <RepositoryList />
    </GestureHandlerRootView>
  )
}