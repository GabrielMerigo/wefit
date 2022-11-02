import { Modalize } from 'react-native-modalize'
import useModal from '../../hooks/useModal';
import theme from '../../styles/theme';
import { Button } from '../Button';
import * as S from './styles';

export function Modal(){
  const { ref, onClose } = useModal();

  return (
    <Modalize
      closeOnOverlayTap={false}
      handleStyle={{ 
        marginTop: 30,
        backgroundColor: theme.colors.gray_light,
        width: 30
      }}
      ref={ref}
      snapPoint={200}
    >
      <S.Container>
        <S.Title>Alterar usuário selecionado</S.Title>
        <S.ContainerInput>
          <S.Label>Nome do usuário</S.Label>
          <S.Input />
        </S.ContainerInput>
        <S.Buttons>
          <Button onPress={onClose} color='white' title='Cancelar' />
          <Button color='blue' title='Salvar' />
        </S.Buttons>
      </S.Container>
    </Modalize>
  )
}