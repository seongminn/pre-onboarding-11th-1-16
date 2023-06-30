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
    <div>
      <TodoCreator />
      <TodoList />
    </div>
  );
};

export default TodoPage;
