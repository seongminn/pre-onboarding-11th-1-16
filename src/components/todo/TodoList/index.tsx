import { deleteTodo, updateTodo } from '@/apis/todo';
import useTodos from '@/hooks/useTodos';
import { Todo } from '@/types/todo';

import TodoItem from '../TodoItem';

const TodoList = () => {
  const { todos, dispatch } = useTodos();

  const handleUpdateTodo = (id: number, todo: Pick<Todo, 'todo' | 'isCompleted'>) => {
    updateTodo(id, { ...todo }).then(({ data }) => dispatch({ type: 'UPDATE', todo: data }));
  };

  const handleDeleteTodo = (todo: Todo) => {
    deleteTodo(todo.id).then(() => dispatch({ type: 'DELETE', todo }));
  };

  return (
    <ul>
      {todos.map((eachTodo) => (
        <TodoItem
          key={eachTodo.id}
          todoInfo={eachTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
