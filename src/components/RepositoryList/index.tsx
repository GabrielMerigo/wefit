import * as S from './styles';
import { RepositoryItem } from '../../components/RepositoryItem';
import { FlatList } from 'react-native';
import { RepositoryProps } from '../../contexts/RepositoryContext';

type RepositoryListProps = {
  isFavorite?: boolean;
  data: RepositoryProps[];
}

export default function RepositoryList({ isFavorite, data }: RepositoryListProps){
  return (
    <S.Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.full_name)}
        data={data}
        renderItem={({ item }) => (
          <RepositoryItem isFavorite={isFavorite} {...item} />
        )}
      />
    </S.Container>
  )
}