import { useEffect } from 'react';

import { getTodos } from '@/apis/todo';
import TodoCreator from '@/components/todo/TodoCreator';
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
    <div>
      <TodoCreator />
    </div>
  );
};

export default TodoPage;
