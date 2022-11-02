import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.gray_light};
    flex: 1;
  `}
`;