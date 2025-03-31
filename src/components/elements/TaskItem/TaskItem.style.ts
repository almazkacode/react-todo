import styled from '@emotion/styled';

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  width: 100%;
  border: 1px solid #e0e0e0;
  background-color: white;
  cursor: pointer;
`;

export const Checkbox = styled.div<{ isCompleted: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid ${({ isCompleted }) => (isCompleted ? '#66BB6A' : '#e0e0e0')};
`;

export const Checkmark = styled.span`
  color: #66bb6a;
  font-size: 16px;
  font-weight: bold;
`;

export const Text = styled.span<{ isCompleted: boolean }>`
  font-size: 22px;
  color: ${({ isCompleted }) => (isCompleted ? '#B0B0B0' : 'black')};
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
