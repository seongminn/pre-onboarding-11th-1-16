import { Todo, UpdateTodo } from '@/types/todo';

import { instance } from './instance';

export const getTodos = async () => {
  return instance.get<Todo[]>('/todos').catch((err) => {
    throw new Error(err);
  });
};

export const createTodo = async (body: Pick<Todo, 'todo'>) => {
  return instance.post<Todo>('/todos', { ...body }).catch((err) => {
    throw new Error(err);
  });
};

export const updateTodo = async (id: number, body: UpdateTodo) => {
  return instance.put<Todo>(`/todos/${id}`, body).catch((err) => {
    throw new Error(err);
  });
};

export const deleteTodo = async (id: number) => {
  return instance.delete(`/todos/${id}`).catch((err) => {
    throw new Error(err);
  });
};
