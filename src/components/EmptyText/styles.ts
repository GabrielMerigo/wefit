import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-size: 20px;
    text-align: left;
  `}
`;