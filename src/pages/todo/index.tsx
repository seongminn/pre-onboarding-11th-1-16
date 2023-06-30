import { useEffect } from 'react';

import { getTodos } from '@/apis/todo';
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

  return <div></div>;
};

export default TodoPage;
