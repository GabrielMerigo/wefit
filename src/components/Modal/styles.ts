import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 38px 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ContainerInput = styled.View`
  ${({ theme }) => css`
    width: 358px;
    height: 56px;
    background: ${theme.colors.gray_light};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.colors.gray_dark};
    margin-top: 6px;
    margin-left: 12px;
  `}
`;

export const Input = styled.TextInput`
  margin-left: 12px;
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.colors.gray_dark};
    margin-top: 6px;
    margin-left: 12px;
  `}
`;

export const Cancel = styled.TouchableOpacity``;

export const Save = styled.TouchableOpacity``;
