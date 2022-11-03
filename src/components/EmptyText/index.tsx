import * as S from './styles';

type EmptyTextProps = {
  title: string;
}

export function EmptyText({ title }: EmptyTextProps){
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}