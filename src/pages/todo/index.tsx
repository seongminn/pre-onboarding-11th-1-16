import styled from '@emotion/styled';
import { useEffect } from 'react';

import { getTodos } from '@/apis/todo';
import TodoCreator from '@/components/todo/TodoCreator';
import TodoList from '@/components/todo/TodoList';
import useTodos from '@/hooks/useTodos';

const TodoPage = () => {
  const { dispatch } = useTodos();

  useEffect(() => {
    const handleGetTodo = () => {
      getTodos().then(({ data }) => {
        dispatch({ type: 'GET', init: data });
      });
    };

    handleGetTodo();
  }, [dispatch]);

  return (
    <Wrapper>
      <Header />
      <Section>
        <TodoCreator />
        <TodoList />
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 0.4fr 9.6fr;
`;

const Header = styled.div`
  background-color: rgb(65, 104, 177);
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  margin: auto;
  width: 95%;
  height: 100%;
  padding: 30px 20px 0px;
`;

export default TodoPage;
