import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { PATH } from '@/constants/path';
import { Section } from '@/styles/register';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(PATH.MAIN);
  };

  return (
    <Section>
      <P>404 Not Found</P>
      <Button onClick={handleButton}>홈으로 돌아가기</Button>
    </Section>
  );
};

const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 20%;
  padding: 10px;
  align-self: center;
  margin-top: 30px;
  background-color: rgb(229, 234, 255);
  border-radius: 3px;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgb(179, 184, 204);
  }
`;

const P = styled.p`
  font-size: large;
  font-weight: bold;
`;

export default NotFoundPage;
