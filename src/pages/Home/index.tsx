import { Header } from "../../components/Header";
import RepositoryList from '../../components/RepositoryList';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useRepository from "../../hooks/useRepository";
import { EmptyText } from "../../components/EmptyText";

export default function Home(){
  const { repositories } = useRepository();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Header />
      {!repositories.length 
        ? <EmptyText title="Ops... Parece que você ainda não pesquisou nenhum repositório." /> 
        : <RepositoryList data={repositories} />
      }
    </GestureHandlerRootView>
  )
}