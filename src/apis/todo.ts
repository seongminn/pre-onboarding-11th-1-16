import { Todo } from '@/types/todo';

import { instance } from './instance';

export const getTodos = async () => {
  return instance.get('/todos').catch(console.error);
};

export const createTodo = async (body: Pick<Todo, 'todo'>) => {
  return instance.post('/todos', { ...body }).catch(console.error);
};

export const updateTodo = async (id: number, body: Pick<Todo, 'isCompleted' | 'todo'>) => {
  return instance.put(`/todos/${id}`, body).catch(console.error);
};

export const deleteTodo = async (id: number) => {
  return instance.delete(`/todos/${id}`).catch(console.error);
};
