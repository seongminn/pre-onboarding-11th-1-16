import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { PATH } from '@/constants/path';
import { Section } from '@/styles/register';

const Home = () => {
  return (
    <HomeSection>
      <h1>16 TEAM ToDo Page</h1>
      <Link to={PATH.SIGNIN}>SIGNIN</Link>
      <Link to={PATH.SIGNUP}>SIGNUP</Link>
      <Link to={PATH.TODO}>TODO</Link>
    </HomeSection>
  );
};

const HomeSection = styled(Section)`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.6em;
  }
  a {
    margin: 10px auto;
    &:first-of-type {
      margin-top: 50px;
    }
  }
`;

export default Home;
