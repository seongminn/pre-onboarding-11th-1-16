import { createContext, Dispatch, PropsWithChildren, Reducer, useReducer } from 'react';

import { Todo } from '@/types/todo';

type TodoAction =
  | { type: 'GET'; init: Todo[] }
  | { type: 'CREATE'; todo: Todo }
  | { type: 'UPDATE'; todo: Todo }
  | { type: 'DELETE'; todo: Todo };

type TodoContextValue = {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
};

export const TodoContext = createContext<TodoContextValue>({
  todos: [],
  dispatch: () => [],
});

const reducer: Reducer<Todo[], TodoAction> = (state, action) => {
  switch (action.type) {
    case 'GET':
      return action.init;
    case 'CREATE':
      return [...state, action.todo];
    case 'UPDATE':
      return state.map((data) => (data.id === action.todo.id ? { ...action.todo } : data));
    case 'DELETE':
      return state.filter((data) => data.id !== action.todo.id);
    default:
      throw new Error('다시 시도해주세요.');
  }
};

const initialTodos: Todo[] = [];

const TodoContextProvider = (props: PropsWithChildren) => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return <TodoContext.Provider value={{ todos, dispatch }}>{props.children}</TodoContext.Provider>;
};

export default TodoContextProvider;
