import styled from '@emotion/styled';

import { deleteTodo, updateTodo } from '@/apis/todo';
import useTodos from '@/hooks/useTodos';
import { Todo, UpdateTodo } from '@/types/todo';

import TodoItem from '../TodoItem';

const TodoList = () => {
  const { todos, dispatch } = useTodos();

  const handleUpdateTodo = (id: number, todo: UpdateTodo) => {
    updateTodo(id, { ...todo }).then(({ data }) => dispatch({ type: 'UPDATE', todo: data }));
  };

  const handleDeleteTodo = (todo: Todo) => {
    deleteTodo(todo.id).then(() => dispatch({ type: 'DELETE', todo }));
  };

  return (
    <ToDos>
      {todos.map((eachTodo) => (
        <TodoItem
          key={eachTodo.id}
          todoInfo={eachTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ToDos>
  );
};

const ToDos = styled.ul`
  width: 100%;
  li:first-of-type {
    border-top: 1px solid rgb(65, 104, 177);
  }
`;

export default TodoList;
