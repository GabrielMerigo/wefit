import * as S from './styles';
import { RepositoryItem } from '../../components/RepositoryItem';
import { FlatList } from 'react-native';

export default function RepositoryList(){
  const fakeData = [9, 2, 3, 5, 99, 7, 55, 4]

  return (
    <S.Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        data={fakeData}
        renderItem={({ item }) => (
          <RepositoryItem />
        )}
      />
      
    </S.Container>
  )
}