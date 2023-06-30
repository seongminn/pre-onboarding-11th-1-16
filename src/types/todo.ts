export type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

export type UpdateTodo = Pick<Todo, 'todo' | 'isCompleted'>;
