import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 300px;
`;

export const CentralBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 30px;
  background-color: #f0f0f0;
`;

export const Title = styled.h1`
  padding: 20px;
  margin-bottom: 30px;
  font-size: 100px;
  font-weight: 100;
  color: #d1a1a1;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 15px;
  border: 1px solid #e0e0e0;
  background-color: white;
  font-size: 16px;
`;

export const ClearButton = styled.button`
  font-size: inherit;
  cursor: pointer;
`;

export const FooterText = styled.p`
  font-size: inherit;
`;
