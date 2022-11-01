import styled from '@emotion/styled';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: calc(100vh - 206px); /* 70px footer & 64px header & 72px margin */
  width: 100%;
  max-width: 768px;
  margin: 36px auto;
  padding: 36px;
  border-radius: 12px;
  background: #fff;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;
