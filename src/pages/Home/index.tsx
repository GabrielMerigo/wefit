import { Header } from "../../components/Header";
import RepositoryList from '../../components/RepositoryList';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modal } from '../../components/Modal';

import * as S from './styles';

export default function Home(){
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Modal />
      <Header />
      <RepositoryList />
    </GestureHandlerRootView>
  )
}