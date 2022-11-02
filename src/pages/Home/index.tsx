import * as S from './styles';
import { Header } from "../../components/Header";
import { RepositoryItem } from '../../components/RepositoryItem';
import RepositoryList from '../../components/RepositoryList';

export default function Home(){
  return (
    <S.Container>
      <Header />
      <RepositoryList />
    </S.Container>
  )
}