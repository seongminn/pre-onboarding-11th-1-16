import { Dispatch, SetStateAction, useState } from 'react';

import useInput from '@/hooks/useInput';
import { Todo, UpdateTodo } from '@/types/todo';

interface TodoItemProps {
  todoInfo: Todo;
  handleUpdateTodo: (id: number, todo: UpdateTodo) => void;
  handleDeleteTodo: (todo: Todo) => void;
}

interface ModeProps extends TodoItemProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

const TodoItem = (props: TodoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <li>
      {isEdit ? (
        <EditMode {...props} setIsEdit={setIsEdit} />
      ) : (
        <NormalMode {...props} setIsEdit={setIsEdit} />
      )}
    </li>
  );
};

export default TodoItem;

const NormalMode = (props: ModeProps) => {
  const { todoInfo, handleUpdateTodo, handleDeleteTodo, setIsEdit } = props;
  const { id, todo, isCompleted } = todoInfo;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleUpdateTodo(id, { todo, isCompleted: !isCompleted })}
        />
        <span>{todo}</span>
      </label>
      <button onClick={() => setIsEdit(true)} data-testid="modify-button">
        수정
      </button>
      <button onClick={() => handleDeleteTodo(todoInfo)} data-testid="delete-button">
        삭제
      </button>
    </>
  );
};

const EditMode = (props: ModeProps) => {
  const { todoInfo, handleUpdateTodo, setIsEdit } = props;
  const { id, todo, isCompleted } = todoInfo;

  const { value, onChange } = useInput({ todo });

  const onClickUpdateButton = () => {
    handleUpdateTodo(id, { todo: value.todo, isCompleted });

    setIsEdit(false);
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleUpdateTodo(id, { todo, isCompleted: !isCompleted })}
        />
        <input name="todo" defaultValue={todo} onChange={onChange} data-testid="modify-input" />
      </label>
      <button onClick={onClickUpdateButton} data-testid="submit-button">
        제출
      </button>
      <button onClick={() => setIsEdit(false)} data-testid="cancel-button">
        취소
      </button>
    </>
  );
};
