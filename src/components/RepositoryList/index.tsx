import * as S from './styles';
import { RepositoryItem } from '../../components/RepositoryItem';
import { FlatList } from 'react-native';

type RepositoryListProps = {
  isFavorite?: boolean
}

export default function RepositoryList({ isFavorite }: RepositoryListProps){
  const fakeData = [9, 2, 3, 5, 99, 7, 55, 4]

  return (
    <S.Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item)}
        data={fakeData}
        renderItem={({ item }) => (
          <RepositoryItem isFavorite={isFavorite} />
        )}
      />
      
    </S.Container>
  )
}