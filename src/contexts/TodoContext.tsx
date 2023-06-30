import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';

import { Todo } from '@/types/todo';

type CaseType = 'GET' | 'CREATE' | 'UPDATE' | 'DELETE';
type ActionType = {
  type: CaseType;
  init?: Todo[];
  todo?: Todo;
};

export const TodoContext = createContext<{ todos: Todo[]; dispatch: Dispatch<ActionType> }>({
  todos: [] as Todo[],
  dispatch: () => [],
});

const reducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case 'GET':
      if (!action.init) return [];

      return [...action.init];
    case 'CREATE':
      if (!action.todo) return state;

      return [...state, action.todo];
    case 'UPDATE':
      if (!action.todo) return state;

      return state.map((data) => (data.id === action.todo?.id ? { ...action.todo } : data));
    case 'DELETE':
      if (!action.todo) return state;

      return state.filter((data) => data.id !== action.todo?.id);
    default:
      throw new Error('다시 시도해주세요.');
  }
};

const initTodo: never[] = [];

const TodoContextProvider = (props: PropsWithChildren) => {
  const [todos, dispatch] = useReducer(reducer, initTodo);

  return <TodoContext.Provider value={{ todos, dispatch }}>{props.children}</TodoContext.Provider>;
};

export default TodoContextProvider;
