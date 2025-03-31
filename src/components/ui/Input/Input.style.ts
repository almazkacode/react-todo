import styled from '@emotion/styled';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  border: 1px solid #e0e0e0;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border: 1px solid #909090;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const InputField = styled.input`
  flex-grow: 1;
  background: transparent;
  border: none;
  outline: none;
  padding-left: 30px;

  &::placeholder {
    font-style: italic;
    color: #909090;
  }
`;
