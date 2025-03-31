import styled from '@emotion/styled';

export const Button = styled.button<{ active: boolean }>`
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid ${({ active }) => (active ? '#d1a1a1' : 'transparent')};
  border-radius: 5px;
`;
